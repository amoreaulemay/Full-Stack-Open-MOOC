import Part from "./Part";

/** @type {(props: ContentProps) => JSX.Element} */
const Content = (props) => {
    return (
        <>
            {props.content.map((part, index) => <Part key={index} {...part} />)}
        </>
    );
};

export default Content;