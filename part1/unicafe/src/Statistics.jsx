import React from "react";

import StatisticLine from "./StatisticLine";

/**
 * @typedef StatisticsProps
 * The props of the `Statistics` module.
 * @prop {number} good    The number of positive reviews
 * @prop {number} neutral The number of neutral reviews
 * @prop {number} bad     The number of bad reviews
 */

const PTS_GOOD = 1; // The weight of a positive review
const PTS_NEUTRAL = 0; // The weight of a neutral review
const PTS_BAD = -1; // The weight of a bad review

/** @type {(props: StatisticsProps) => JSX.Element} */
const Statistics = (props) => {
    const { good, neutral, bad } = props;

    /**
     * Calculates the total number of reviews given.
     * @returns The total number of reviews.
     */
    const total = () => good + neutral + bad;

    /**
     * Calculates the average score weighted according to given values.
     * @returns The average score.
     */
    const average = () =>
        (good * PTS_GOOD + neutral * PTS_NEUTRAL + bad * PTS_BAD) / total();

    /**
     * Calculates the percentage of positive ratios to the total.
     * @returns The positive reviews ratio.
     */
    const positiveRatio = () => (good / total()) * 100;

    if (total() > 0) {
        return (
            <React.Fragment>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <StatisticLine text="Good" value={good} />
                        <StatisticLine text="Neutral" value={neutral} />
                        <StatisticLine text="Bad" value={bad} />
                    </tbody>
                    <tfoot>
                        <StatisticLine text="Average" value={average()} bold />
                        <StatisticLine
                            text="Positive"
                            value={positiveRatio()}
                            bold
                        />
                    </tfoot>
                </table>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h2>Statistics</h2>
                <p>No feedback given.</p>
            </React.Fragment>
        );
    }
};

export default Statistics;
