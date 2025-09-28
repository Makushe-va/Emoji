import React, { useState } from 'react';
import EmojiList from './EmojiList';
import Results from './Results';
import '../style/EmojiVoting.css';

const emojis = ['🚀','🤢', '🎸','🔥'];

export default function EmojiVoting() {
    const [votes, setVotes] = useState(Array(emojis.length).fill(0));
    const [showWinner, setShowWinner] = useState(false);

    const vote = (index) => {
        const newVotes = [...votes];
        newVotes[index]++;
        setVotes(newVotes);
    };

    return (
        <div className="emoji-voting">
            <h2>Голосування за найкращий смайлик</h2>
            <EmojiList emojis={emojis} votes={votes} onVote={vote} />
            <button
                onClick={() => setShowWinner(true)}
                className="show-results-btn"
            >
                Show Results
            </button>

            {showWinner && <Results emojis={emojis} votes={votes} />}
        </div>
    );
}
