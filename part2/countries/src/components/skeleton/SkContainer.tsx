import { ComponentChild } from "preact";
import * as utils from "./utils";

interface ContainerProps extends utils.BaseProps {
    children?: ComponentChild;
}

export default function Container({
    children,
    className,
    style,
}: ContainerProps) {
    const extraClasses = utils.cf(className);

    return (
        <div
            className={
                "animate-pulse flex flex-col justify-start items-stretch" +
                extraClasses
            }
            style={style}
        >
            {children}
        </div>
    );
}
