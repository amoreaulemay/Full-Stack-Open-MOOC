/**
 * @typedef ButtonProps
 * The props of a `Button` component.
 *
 * @prop {string}              title       The title of the button.
 * @prop {(() => void) | null} handleClick How click events should be handled.
 */

/** @type {(props: ButtonProps) => JSX.Element} */
const Button = (props) => {
    return <button onClick={props.handleClick}>{props.title}</button>;
};

export default Button;
