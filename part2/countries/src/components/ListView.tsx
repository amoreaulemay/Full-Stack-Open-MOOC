import { Fragment } from "preact";
import { Country } from "../models/country";
import ListItem from "./ListItem";

interface ListViewProps {
    countries: Country[];
}

export default function ListView({ countries }: ListViewProps) {
    return (
        <div className="flex flex-col justify-end md:justify-start items-stretch py-1 min-h-full">
            {countries.length > 0 &&
                countries.map((country, index) => (
                    <Fragment key={index}>
                        <ListItem country={country} />
                        {index + 1 < countries.length && <Divider />}
                    </Fragment>
                ))}
            {countries.length === 0 && (
                <p className="italic mx-4 my-2">No country match criterias.</p>
            )}
        </div>
    );
}

function Divider() {
    return (
        <div className="ml-4 md:mx-4 h-[1px] bg-neutral-500 bg-opacity-30"></div>
    );
}
