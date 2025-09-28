import React from 'react';
import '../style/EmojiVoting.css';

export default function Results({ emojis, votes }) {
    const maxVotes = Math.max(...votes);
    if (maxVotes === 0) {
        return <div className="no-votes">Ще немає голосів 😐</div>;
    }

    const winnerIndex = votes.indexOf(maxVotes);

    return (
        <div className="results">
            Переможець: {emojis[winnerIndex]} з {votes[winnerIndex]} голосами!
        </div>
    );
}
