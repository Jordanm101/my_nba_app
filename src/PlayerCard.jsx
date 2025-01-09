import React from 'react';

function PlayerCard({name, team }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}>
            <h2>{name}</h2>
            <p>Team: {team}</p>
        </div>
    );
}

export default PlayerCard;