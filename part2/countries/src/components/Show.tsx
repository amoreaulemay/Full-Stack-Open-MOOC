import { ComponentChild, Fragment } from "preact";

interface ShowProps {
    if: boolean;
    children?: ComponentChild;
}

export default function Show(props: ShowProps) {
    if (props.if) {
        return <Fragment>{props.children}</Fragment>;
    } else {
        return <Fragment></Fragment>;
    }
}
