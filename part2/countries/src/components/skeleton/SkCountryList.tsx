import * as utils from "./utils";

import SkCountryListing from "./SkCountryListing";
import { Fragment } from "preact";

interface SkCountryListProps extends utils.BaseProps {
    n: number;
}

function Divider() {
    return (
        <div className="ml-4 md:mx-4 h-[1px] bg-neutral-500 bg-opacity-30"></div>
    );
}

export default function SkCountryList(props: SkCountryListProps) {
    const extraClasses = utils.cf(props.className);
    const listings = Array.from({ length: props.n }, () => (
        <SkCountryListing />
    ));

    return (
        <div
            className={
                "flex flex-col justify-end md:justify-start items-stretch py-1 min-h-full" +
                extraClasses
            }
            style={props.style}
        >
            {listings.map((listing, index) => (
                <Fragment key={index}>
                    {listing}
                    {index + 1 < listings.length && <Divider />}
                </Fragment>
            ))}
        </div>
    );
}
