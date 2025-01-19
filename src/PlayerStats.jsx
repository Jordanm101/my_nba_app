import React, {useEffect, useState} from "react";
import { getPlayerStats } from "./api/nbaStats"; //import the NBA stats API function

function PlayerStats({playerId, onClose}) {
    console.log('PlayerStats component rendered:', playerId);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            console.log('Calling getplayerStats for player ID:', playerId);
            try {
                const data = await getPlayerStats(playerId); //fetch the player stats
                console.log('Player Stats api call success:', data); //Log the response
                setStats(data); //Sets the stats state
            } catch (error) {
                console.error('Error fetching player stats in PlayerStats', error);
                setError('Error fetching player stats:');
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, [playerId]);

    if (loading) return <p>Loading player stats...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '15px',
            margin: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            backgroundColor: '#f9f9f9',
        }}>
            <h2>Player Stats</h2>
            {stats ? (
                <pre>{JSON.stringify(stats, null, 2)}</pre> //going to replace later with proper stats rendering
            ) : (
                <p>No stats available for this player</p>
            )}
            <button 
                onClick={onClose}
                style={{
                    marginTop: '10px',
                    padding: '8px 12px',
                    fontSize: '14px',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                >
                    Close
                    </button>
        </div>
    );
}

export default PlayerStats;