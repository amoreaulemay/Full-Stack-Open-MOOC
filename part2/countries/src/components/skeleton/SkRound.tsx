import * as utils from "./utils";

export default function SkRound({ className, style }: utils.BaseProps) {
    const extraClasses = utils.cf(className);

    return (
        <div
            className={
                "rounded-full bg-gray-200 dark:bg-neutral-900" + extraClasses
            }
            style={style}
        ></div>
    );
}
