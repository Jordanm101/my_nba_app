import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard';
import SearchBar from './SearchBar';

function App() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      if (searchTerm) {
        fetchPlayers(searchTerm);
      }
    }, [searchTerm]);

    const fetchPlayers = async (query) => {
      try{
        const response = await fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`);
        const data = await response.json();
        setPlayers(data.data);
      } catch (error) {
          console.error('Error fetching players:', error);
      }
    };

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to My NBA Web APP!</h1>
        <p>Where you can track players, teams, and games!</p>

        {/* searchbar added here */}
        <SearchBar onSearch={setSearchTerm} />
        {/* Render PlayerCard componenets dynamically */}
      <div>
          {players.length > 0 ? (
              players.map((player) => (
                  <PlayerCard
                      key={player.id}
                      name={`${player.first_name} ${player.last_name}`}
                      team={player.team.full_name}
                  />
              ))
          ) : (
            <p>No players found. Try searching for a players!</p>
          )}
        </div>
      </div>
    );
}

export default App;
