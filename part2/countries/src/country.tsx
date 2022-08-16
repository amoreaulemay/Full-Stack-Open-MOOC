import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "preact/hooks";

import { CapitalInfo, Country as CountryModel } from "./models/country";
import Container from "./components/Container";
import { Card, CardContent, CardHeader } from "./components/Card";

import Skeleton, { Variant } from "./components/skeleton";
import Show from "./components/Show";
import Button from "./components/Button";
import { Fragment } from "preact";
import ChevronLeft from "./components/icons/ChevronLeft";
import WeatherResolver, { WeatherReport } from "./utils/WeatherResolver";

function LoadingSkeleton() {
    return (
        <Skeleton.Container className="p-4 gap-3">
            <div className="flex flex-row justify-start items-start gap-4">
                <Skeleton.Round className="h-16 w-16" />
                <div className="flex flex-col gap-3 mt-2">
                    <Skeleton.Text variant={Variant.h2} length={32} />
                    <Skeleton.Text length={56} />
                </div>
            </div>
            <Skeleton.Text variant={Variant.h2} length={44} />
            <Skeleton.BulletList className="pl-4" n={3} />
        </Skeleton.Container>
    );
}

function ErrorDisplay({ error }: { error: string }) {
    return (
        <p className="px-4 py-2">
            <strong>Error: </strong>
            {error}
        </p>
    );
}

function CountryDisplay({
    country,
    weather,
}: {
    country: CountryModel;
    weather?: WeatherReport;
}) {
    const capital = (function () {
        if (typeof country.capital === "undefined") {
            return "Capital: Unknown";
        } else {
            if (Array.isArray(country.capital)) {
                return country.capital.length <= 1
                    ? "Capital: " + country.capital.join(", ")
                    : "Capitals: " + country.capital.join(", ");
            } else {
                return "Capital: " + country.capital;
            }
        }
    })();

    return (
        <Fragment>
            <div className=" flex flex-row justify-start items-start gap-4 p-4">
                <img
                    alt={country.name.common}
                    src={country.flags.svg}
                    className="rounded-full h-16 w-16 object-cover object-center border-white border-4 shadow-sm shadow-[rgba(0,0,0,0.5)] ring-inset ring-2 ring-black"
                />
                <div className="flex flex-col mt-2">
                    <h2 className="text-xl font-bold">
                        {country.name.official}
                    </h2>
                    <span className="text-base font-bold italic">
                        ({country.name.common})
                    </span>
                    <span className="text-base text-gray-500">{capital}</span>
                </div>
            </div>
            <Show if={typeof country.languages !== "undefined"}>
                <div className="flex flex-col px-4">
                    <h3 className="text-xl font-bold">Languages</h3>
                    <ul className="list-disc pl-4 ml-4 mt-2">
                        {typeof country.languages !== "undefined" &&
                            Object.values(country.languages).map(
                                (language, index) => (
                                    <li key={index}>{language}</li>
                                )
                            )}
                    </ul>
                </div>
            </Show>
            <div className="flex flex-col px-4">
                <h3 className="text-xl font-bold">Area</h3>
                <p className="mt-2">
                    {country.area}{" "}
                    <span className="after:text-xs after:align-top after:content-['2']">
                        km
                    </span>
                </p>
            </div>
            <Show if={typeof weather !== "undefined"}>
                <div className="flex flex-col px-4 mt-2">
                    <h3 className="text-xl font-bold">
                        Weather for{" "}
                        {capital.replace("Capital: ", "").split(", ")[0]}
                    </h3>

                    <div className="mt-2">
                        <p>
                            <strong>Condition: </strong>
                            {weather?.description ?? "Unavailable"}
                        </p>
                        <p>
                            <strong>Temperature: </strong>
                            {weather?.temperature.toFixed() ?? 0}&#8451;
                        </p>
                        <p>
                            <strong>Wind Speed: </strong>
                            {weather?.windSpeed.toFixed(1) ?? 0}m/s
                        </p>
                    </div>
                </div>
            </Show>
        </Fragment>
    );
}

export default function Country() {
    const params = useParams();
    const [loading, setLoading] = useState(true);

    const [countryData, setCountryData] = useState<CountryModel | undefined>(
        undefined
    );
    const [weather, setWeather] = useState<WeatherReport | undefined>(
        undefined
    );

    const [errorMessage, setErrorMessage] = useState("");

    document.title =
        typeof countryData === "undefined"
            ? "Atlas"
            : "Atlas - " + countryData.name.common;

    useEffect(() => {
        fetch(
            import.meta.env.VITE_SPECIFIC_COUNTRY +
                encodeURI(params.country ?? "")
        )
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(
                            "The country " +
                                params.country +
                                " does not exist in the database."
                        );
                    }

                    throw new Error(response.statusText);
                }

                return response.json() as unknown as CountryModel[];
            })
            .then((data) => {
                const index = data.findIndex(
                    (c) => c.name.official === params.country
                );

                if (index !== -1) {
                    setCountryData(data[index]);
                    return data[index];
                }

                throw new Error("The country does not exist in the database.");
            })
            .then(async (country) => {
                if (Object.hasOwn(country.capitalInfo, "latlng")) {
                    try {
                        const weatherReport = await WeatherResolver({
                            latitude: (country.capitalInfo as CapitalInfo)
                                .latlng[0],
                            longitude: (country.capitalInfo as CapitalInfo)
                                .latlng[1],
                        });

                        setWeather(WeatherReport.copyFrom(weatherReport));
                        setLoading(false);
                    } catch (error) {
                        throw new Error(String(error));
                    }

                    return;
                } else {
                    setLoading(false);
                    return;
                }
            })
            .catch((error) =>
                setErrorMessage(`Error: ${JSON.stringify(error)}`)
            );
    }, []);

    const navigate = useNavigate();

    return (
        <div class="absolute inset-0 w-full h-full">
            <Container>
                <Card>
                    <CardHeader>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="w-28 basis-[33%] pr-7">
                                <Button
                                    onClick={() => navigate("/")}
                                    icon={<ChevronLeft className="w-3 h-3" />}
                                >
                                    Back
                                </Button>
                            </div>
                            <h1 className="text-xl basis-[33%] text-center">
                                Details
                            </h1>
                            <div className="basis-[33%]"></div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Show if={errorMessage !== ""}>
                            <ErrorDisplay error={errorMessage} />
                        </Show>
                        <Show if={errorMessage === ""}>
                            <Show if={loading}>
                                <LoadingSkeleton />
                            </Show>
                            <Show if={!loading}>
                                <CountryDisplay
                                    country={countryData!}
                                    weather={weather!}
                                />
                            </Show>
                        </Show>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
