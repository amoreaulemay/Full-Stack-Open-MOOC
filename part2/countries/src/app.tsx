// Mark: Libraries Import
import { useEffect, useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";

// Mark: Components Import
import { Card, CardContent, CardHeader } from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";
import ListView from "./components/ListView";
import Show from "./components/Show";
import Skeleton from "./components/skeleton";
import { Country } from "./models/country";

const LoadingSkeleton = () => {
    return (
        <Skeleton.Container className="px-4 py-1">
            <Skeleton.CountryList n={5} />
        </Skeleton.Container>
    );
};

interface LoadError {
    hasError: boolean;
    message?: string;
}

export function App() {
    const [countrySearch, setCountrySearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<LoadError>({ hasError: false });

    const navigate = useNavigate();

    const handleInput = (newValue: string) => {
        setCountrySearch(newValue);
    };

    const [countryList, setCountryList] = useState<Country[]>([]);
    const filteredCountries = () =>
        countryList.filter((country) => {
            if (countrySearch.length === 0) {
                return true;
            } else {
                if (
                    country.name.common
                        .toLowerCase()
                        .normalize("NFKD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .search(
                            countrySearch
                                .toLowerCase()
                                .normalize("NFKD")
                                .replace(/[\u0300-\u036f]/g, "")
                        ) === -1
                ) {
                    return false;
                } else {
                    return true;
                }
            }
        });

    useEffect(() => {
        const _countries: Country[] = [];

        fetch(import.meta.env.VITE_COUNTRIES_API)
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("The ressource could not be found.");
                    } else {
                        throw new Error(response.statusText);
                    }
                }

                return response.json() as unknown as Country[];
            })
            .then((countries) => {
                for (const country of countries) {
                    _countries.push(country);
                }

                setCountryList(
                    _countries.sort((a, b) =>
                        a.name.common.localeCompare(b.name.common)
                    )
                );

                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);

                setError({
                    hasError: true,
                    message: `${error}`,
                });
            });
    }, []);

    document.title = "Atlas";

    if (filteredCountries().length === 1) {
        navigate("country/" + encodeURI(filteredCountries()[0].name.official));
    }

    return (
        <div className="absolute inset-0 w-full h-full">
            <Container>
                <Card>
                    <CardHeader>
                        <Input
                            placeholder="Country"
                            className="w-full md:w-3/4"
                            value={countrySearch}
                            onInput={handleInput}
                        />
                    </CardHeader>
                    <CardContent>
                        <Show if={error.hasError}>
                            <p>
                                <strong>Error: </strong>
                                {error.message}
                            </p>
                        </Show>
                        <Show if={!error.hasError}>
                            <Show if={loading}>
                                <LoadingSkeleton />
                            </Show>
                            <Show if={!loading}>
                                <ListView countries={filteredCountries()} />
                            </Show>
                        </Show>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
