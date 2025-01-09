import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard';
import SearchBar from './SearchBar';
import { BalldontlieAPI } from '@balldontlie/sdk';

const api = new BalldontlieAPI({ apiKey: import.meta.env.VITE_API_KEY });

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
        console.log(`Fetching players with query: ${query}`); //loge the query
        const response = await api.nba.getPlayers({ search: query }); //fetch the players from the API
        console.log(`API response:`, response); //log the API response
        setPlayers(response.data);
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
                      team={player.team.full_name || 'No team'}
                      position={player.position || 'Unknown'}
                      height={null} //Null for now because not in free API Tier
                      weight={null} //Null for now because not in free API Tier
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
