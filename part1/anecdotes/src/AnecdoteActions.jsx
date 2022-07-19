/**
 * @typedef AnecdoteActionsProps
 * @prop {() => void} handleVote The handler when a user clicks the "vote" button.
 * @prop {() => void} handleNext The handler when a user clicks the "Get Next" button.
 *
 * @typedef {(props: AnecdoteActionsProps) => JSX.Element} AnecdoteActionsComp
 */

/** @type {AnecdoteActionsComp} */
const AnecdoteActions = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "4px" }}>
            <button onClick={props.handleVote}>Vote</button>
            <button onClick={props.handleNext}>Next Anecdote</button>
        </div>
    );
};

export default AnecdoteActions;
