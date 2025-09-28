import React from 'react';
import '../style/EmojiVoting.css';

export default function EmojiItem({ emoji, votes, onVote }) {
    return (
        <div className="emoji-item" onClick={onVote}>
            <div>{emoji}</div>
            <div className="vote-count">{votes} голосів</div>
        </div>
    );
}
