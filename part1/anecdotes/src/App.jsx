import React from "react";
import Anecdotes from "./data/anecdotes";

import Votes from "./Votes";
import AnecdoteActions from "./AnecdoteActions";

function App() {
    const [anecdotes, setAnecdotes] = React.useState(Anecdotes);
    const update = (/** @type {(() => void)?} */ action) => {
        typeof action !== "undefined" ? action() : null;
        setAnecdotes(anecdotes.copyWith());
    };

    return (
        <div className="App">
            <h1>Anecdote of the day</h1>
            <p>{anecdotes.getCurrent().text}</p>
            <Votes votes={anecdotes.getCurrent().votes} />
            <AnecdoteActions
                handleVote={() => update(anecdotes.vote())}
                handleNext={() => update(anecdotes.getNext())}
            />
            <hr />
            <h2>Anecdote with the most votes</h2>
            <p>{anecdotes.getBest().text}</p>
            <Votes votes={anecdotes.getBest().votes} />
        </div>
    );
}

export default App;
