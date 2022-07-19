/**
 * @typedef HeaderProps
 * @prop {string} course
 */

/** @type {(props: HeaderProps) => JSX.Element} */
const Header = (props) => {
    return <h1>{props.course}</h1>
};

export default Header;