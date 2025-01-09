import React from 'react';

function PlayerCard({name, team, position, height, weight}) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}>
            <h2>{name}</h2>
            <p><strong>Team:</strong> {team}</p>
            <p><strong>Position:</strong> {position || 'Unknown'}</p>
            <p><strong>Height:</strong> {height || 'Unavailable'}</p>
            <p><strong>Weight:</strong> {weight|| 'Not available'} </p>
        </div>
    );
}

export default PlayerCard;