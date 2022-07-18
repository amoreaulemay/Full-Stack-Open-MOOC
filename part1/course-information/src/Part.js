/**
 * @typedef PartProps
 * @prop {string} name The name of the part
 * @prop {number} exercises The number of exercises
 * 
 * @typedef {PartProps[]} Parts
 */

/** @type {(props: PartProps) => JSX.Element} */
const Part = (props) => {
    return <p>{props.name} {props.exercises}</p>;
};

export default Part;