/**
 * @typedef FooterProps
 * @prop {import("./Part").Parts} content
 */

/** @type {(props: FooterProps) => JSX.Element} */
const Footer = (props) => {
    const total = props.content.reduce((partialTotal, newItem) => partialTotal + newItem.exercises, 0);

    return <p>Number of exercises {total}</p>
};

export default Footer;