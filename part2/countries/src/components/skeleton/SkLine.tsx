import * as utils from "./utils";

export default function SkLine({ className, style }: utils.BaseProps) {
    const extraClasses = utils.cf(className);

    return (
        <div
            className={
                "bg-gray-200 dark:bg-neutral-900 rounded-xl" + extraClasses
            }
            style={style}
        ></div>
    );
}
