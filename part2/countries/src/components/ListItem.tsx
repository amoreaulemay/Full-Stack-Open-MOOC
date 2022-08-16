import { useNavigate } from "react-router-dom";
import { Country } from "../models/country";
import ChevronRight from "./icons/ChevronRight";

interface ListItemProps {
    country: Country;
}

export default function ListItem({ country }: ListItemProps) {
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

    const navigate = useNavigate();

    return (
        <div
            className="px-4 py-2 flex flex-row justify-between items-center h-14 gap-2 cursor-pointer"
            onClick={() =>
                navigate("country/" + encodeURI(country.name.official))
            }
        >
            <img
                alt={country.name.common}
                src={country.flags.svg}
                className="h-9 w-9 object-cover object-center rounded-full border-white border-2 shadow-sm shadow-[rgba(0,0,0,0.5)] ring-inset ring-1 ring-black"
            />
            <div className="flex flex-col items-start justify-start flex-grow">
                <span className="font-bold">{country.name.common}</span>
                <span className="text-gray-600 text-sm">{capital}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
        </div>
    );
}
