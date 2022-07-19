import React from "react";
import "./styles/Button.css";

import Statistics from "./Statistics";
import Button from "./Button";

const PTS_GOOD = 1;
const PTS_NEUTRAL = 0;
const PTS_BAD = -1;

function App() {
    const [good, setGood] = React.useState(0);
    const [neutral, setNeutral] = React.useState(0);
    const [bad, setBad] = React.useState(0);

    const total = () => good + neutral + bad;

    const average = () =>
        (good * PTS_GOOD + neutral * PTS_NEUTRAL + bad * PTS_BAD) / total();
    const positiveRatio = () => (good / total()) * 100;

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
