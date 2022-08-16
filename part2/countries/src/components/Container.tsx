import { ComponentChild } from "preact";

interface ContainerProps {
    children?: ComponentChild;
}

export default function Container(props: ContainerProps): JSX.Element {
    return (
        <div className="h-full w-full bg-gray-200 dark:bg-neutral-900 bg-opacity-50 dark:bg-opacity-100 flex flex-col items-center justify-center">
            {props.children}
        </div>
    );
}
