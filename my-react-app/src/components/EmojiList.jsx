import React from 'react';
import EmojiItem from './EmojiItem';
import '../style/EmojiVoting.css';

export default function EmojiList({ emojis, votes, onVote }) {
    return (
        <div className="emoji-list">
            {emojis.map((emoji, i) => (
                <EmojiItem
                    key={i}
                    emoji={emoji}
                    votes={votes[i]}
                    onVote={() => onVote(i)}
                />
            ))}
        </div>
    );
}
