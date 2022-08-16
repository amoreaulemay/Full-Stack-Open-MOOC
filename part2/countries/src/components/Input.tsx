import { isChrome } from "../utils/browserDetection";

interface InputProps {
    placeholder?: string;
    value?: string;
    onInput?: (newValue: string) => void;
    id?: string;
    name?: string;
    className?: string;
}

export default function Input(props: InputProps): JSX.Element {
    if (isChrome) {
        return (
            <div
                className={
                    (typeof props.className !== "undefined"
                        ? props.className + " "
                        : "") + "relative"
                }
            >
                <input
                    type="text"
                    placeholder={props.placeholder}
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onInput={(e) => {
                        if (typeof props.onInput === "function") {
                            props.onInput((e.target as HTMLInputElement).value);
                        }
                    }}
                    autoComplete="off"
                    autoCorrect="off"
                    className={`w-full rounded-lg border-transparent flex-1 appearance-none border border-gray-300 dark:border-neutral-700 py-2 px-4 bg-white dark:bg-black text-gray-700 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder:absolute placeholder:-translate-x-1/2 placeholder:left-1/2 placeholder:top-1/2 placeholder:-translate-y-1/2 placeholder:text-center placeholder:w-fit placeholder:block focus:placeholder:left-4 focus:placeholder:translate-x-0 placeholder:transition-all`}
                />
            </div>
        );
    } else {
        return (
            <div
                className={
                    (typeof props.className !== "undefined"
                        ? props.className + " "
                        : "") + "relative"
                }
            >
                <input
                    type="text"
                    placeholder={props.placeholder}
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onInput={(e) => {
                        if (typeof props.onInput === "function") {
                            props.onInput((e.target as HTMLInputElement).value);
                        }
                    }}
                    autoComplete="off"
                    autoCorrect="off"
                    className={`w-full rounded-lg border-transparent flex-1 appearance-none border border-gray-300 dark:border-neutral-700 py-2 px-4 bg-white dark:bg-black text-gray-700 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder:text-center`}
                />
            </div>
        );
    }
}
