import React from 'react';

function PlayerCard({name, team, position, height, weight, onShowStats}) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            textAlign: 'left',
        }}>
            <h2>{name}</h2>
            <p><strong>Team:</strong> {team}</p>
            <p><strong>Position:</strong> {position || 'Unknown'}</p>
            <p><strong>Height:</strong> {height || 'Unavailable'}</p>
            <p><strong>Weight:</strong> {weight|| 'Not available'} </p>
            <button
                onClick={onShowStats}
                style={{
                    marginTop: '10px',
                    padding: '8px 12px',
                    fontSize: '14px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                View Stats
            </button>
        </div>
    );
}

export default PlayerCard;