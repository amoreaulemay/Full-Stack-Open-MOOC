import * as utils from "./utils";

import SkBulletPoint from "./SkBulletPoint";

interface SkBulletListProps extends utils.BaseProps {
    n: number;
}

export default function SkBulletList({
    className,
    n,
    style,
}: SkBulletListProps) {
    const extraClasses = utils.cf(className);
    const bullets: JSX.Element[] = [];

    if (n <= 0) {
        return <div className={extraClasses}></div>;
    }

    for (let i = 0; i < n; i++) {
        bullets.push(<SkBulletPoint key={i} />);
    }

    return (
        <div
            className={
                "flex flex-col justify-start items-start gap-3" + extraClasses
            }
            style={style}
        >
            {bullets}
        </div>
    );
}
