/**
 * @typedef StatisticLineProps
 * The props of a `StatisticLine` module.
 *
 * @prop {string}          text  The title of the line.
 * @prop {string | number} value The value of the line.
 * @prop {boolean?}        bold  Set to true if the title should be displayed in bold.
 */

/** @type {(props: StatisticLineProps) => JSX.Element} */
const StatisticLine = (props) => {
    return (
        <tr>
            {props.bold ? <th>{props.text}</th> : <td>{props.text}</td>}
            <td>{props.value}</td>
        </tr>
    );
};

export default StatisticLine;
