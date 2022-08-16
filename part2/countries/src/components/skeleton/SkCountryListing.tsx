import * as utils from "./utils";

import SkRound from "./SkRound";
import SkText, { Variant } from "./SkText";

export default function SkCountryListing(props: utils.BaseProps) {
    const extraClasses = utils.cf(props.className);

    return (
        <div
            className={
                "py-2 flex flex-row justify-between items-center h-14 gap-2" +
                extraClasses
            }
            style={props.style}
        >
            <SkRound className="w-9 h-9" />
            <div className="flex flex-col items-start justify-start flex-grow gap-3">
                <SkText variant={Variant.h3} length={32} />
                <SkText variant={Variant.base} length={56} />
            </div>
        </div>
    );
}
