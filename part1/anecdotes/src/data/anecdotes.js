/**
 * @typedef Anecdote
 * @prop {string} text  The text of the anecdote
 * @prop {number} votes The number of votes for the anecdote
 *
 * @typedef AnecdotesObj
 * @prop {number}                   currentIndex The current index.
 * @prop {Anecdote[]}               anecdotes    The collection of anecdotes.
 * @prop {function(): void}         getRandom    Utility function to get a random anecdote.
 * @prop {function(): Anecdote}     getCurrent   Returns the current quote for index.
 * @prop {function(): void}         getNext      Increase the index for the next quote.
 * @prop {function(): number}       length       Returns the total number of anecdotes.
 * @prop {function(): void}         vote         Increment the current anecdote's vote by 1.
 * @prop {function(): Anecdote}     getBest      Returns the anecdote with the most votes. In case of equality, returns the first of those anecdotes.
 * @prop {function(): AnecdotesObj} copyWith     Returns a dereferenced copy of itself.
 */

/** @type {AnecdotesObj} */
const Anecdotes = {
    currentIndex: 0,
    anecdotes: [
        {
            text: "If it hurts, do it more often.",
            votes: 0,
        },
        {
            text: "Adding manpower to a late software project makes it later!",
            votes: 0,
        },
        {
            text: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
            votes: 0,
        },
        {
            text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            votes: 0,
        },
        {
            text: "Premature optimization is the root of all evil.",
            votes: 0,
        },
        {
            text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
            votes: 0,
        },
        {
            text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
            votes: 0,
        },
    ],

    getRandom: function () {
        this.currentIndex = Math.floor(Math.random() * this.anecdotes.length);
    },

    getCurrent: function () {
        return this.anecdotes[this.currentIndex];
    },

    getNext: function () {
        this.currentIndex = (this.currentIndex + 1) % this.length();
    },

    length: function () {
        return this.anecdotes.length;
    },

    vote: function () {
        this.anecdotes[this.currentIndex].votes += 1;
    },

    getBest: function () {
        let bestAnecdote = this.anecdotes[0];

        this.anecdotes.forEach((anecdote) => {
            if (anecdote.votes > bestAnecdote.votes) {
                bestAnecdote = anecdote;
            }
        });

        return bestAnecdote;
    },

    copyWith: function () {
        return Object.assign({}, this);
    },
};

export default Anecdotes;
