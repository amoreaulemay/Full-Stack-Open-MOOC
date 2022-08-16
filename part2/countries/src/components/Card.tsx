import { ComponentChild } from "preact";

// Mark: Main Component
interface CardProps {
    children?: ComponentChild;
}

export function Card(props: CardProps): JSX.Element {
    return (
        <>
            <div className="w-full h-full md:w-3/4 md:h-3/4 lg:w-[500px] shadow-md bg-white dark:bg-black md:rounded-xl overflow-hidden flex flex-col justify-start items-stretch dark:text-white">
                {props.children}
            </div>
        </>
    );
}

// Mark: Header Component
interface CardHeaderProps {
    children?: ComponentChild;
    className?: string;
}

export function CardHeader(props: CardHeaderProps): JSX.Element {
    return (
        <>
            <header
                className={
                    "h-[100px] basis-[100px] flex-shrink-0 bg-gray-200 dark:bg-black dark:border-t md:dark:border-b dark:border-neutral-800 flex flex-row items-center justify-center p-4 order-2 md:order-1" +
                    (typeof props.className !== "undefined"
                        ? " " + props.className
                        : "")
                }
            >
                {props.children}
            </header>
        </>
    );
}

// Mark: Content Component
interface CardContentProps {
    children?: ComponentChild;
    className?: string;
}

export function CardContent(props: CardContentProps) {
    return (
        <main
            className={
                "flex-grow overflow-y-scroll order-1 md:order-2" +
                (typeof props.className !== "undefined"
                    ? " " + props.className
                    : "")
            }
        >
            {props.children}
        </main>
    );
}
