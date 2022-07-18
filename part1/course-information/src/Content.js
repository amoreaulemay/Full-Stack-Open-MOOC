import Part from "./Part";

/**
 * @typedef ContentProps
 * @prop {import("./Part").Parts} content
 */

/** @type {(props: ContentProps) => JSX.Element} */
const Content = (props) => {
    return (
        <>
            {props.content.map((part, index) => <Part key={index} {...part} />)}
        </>
    );
};

export default Content;