import React from "react";
import "./styles/Button.css";

import Statistics from "./Statistics";
import Button from "./Button";

function App() {
    const [good, setGood] = React.useState(0);
    const [neutral, setNeutral] = React.useState(0);
    const [bad, setBad] = React.useState(0);

    return (
        <React.Fragment>
            <h1>Give Feedback</h1>
            <div className="Buttons--wrapper">
                <Button
                    title="Good"
                    handleClick={() => setGood((prev) => prev + 1)}
                />
                <Button
                    title="Neutral"
                    handleClick={() => setNeutral((prev) => prev + 1)}
                />
                <Button
                    title="Bad"
                    handleClick={() => setBad((prev) => prev + 1)}
                />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </React.Fragment>
    );
}

export default App;
