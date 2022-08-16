import { ComponentChild } from "preact";
import * as utils from "./skeleton/utils";

interface ButtonProps extends utils.BaseProps {
    id?: string;
    onClick?: () => void;
    children?: ComponentChild;
    type?: "button" | "reset" | "submit";
    name?: string;
    icon?: ComponentChild;
    trailIcon?: ComponentChild;
}

export default function Button(props: ButtonProps) {
    const extraClasses = utils.cf(props.className);

    return (
        <button
            type={props.type}
            id={props.id}
            onClick={props.onClick}
            name={props.name}
            className={
                "py-2 px-4 flex flex-row justify-between items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" +
                extraClasses
            }
        >
            <div className="flex-shrink">{props.icon}</div>
            <div className="flex-grow">{props.children}</div>
            <div className="flex-shrink">{props.trailIcon}</div>
        </button>
    );
}
