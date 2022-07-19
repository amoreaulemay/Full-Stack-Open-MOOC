/**
 * @typedef VotesProps
 * @prop {number} votes The number of votes.
 *
 * @typedef {(props: VotesProps) => JSX.Element} VotesComp
 */

/** @type {VotesComp} */
const Votes = (props) => {
    return (
        <p>
            {props.votes} {props.votes > 1 ? "votes" : "vote"}
        </p>
    );
};

export default Votes;
