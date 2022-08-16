import * as utils from "./utils";

import SkLine from "./SkLine";
import SkRound from "./SkRound";

export default function SkBulletPoint({ className, style }: utils.BaseProps) {
    const extraClasses = utils.cf(className);

    return (
        <div
            className={
                "flex flex-row justify-start items-center gap-3" + extraClasses
            }
            style={style}
        >
            <SkRound className="h-2 w-2" />
            <SkLine className="h-3 w-56" />
        </div>
    );
}
