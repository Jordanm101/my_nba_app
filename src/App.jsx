import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard';
import SearchBar from './SearchBar';
import { BalldontlieAPI } from '@balldontlie/sdk';
import PlayerStats from './PlayerStats';

const api = new BalldontlieAPI({ apiKey: import.meta.env.VITE_API_KEY });

function App() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    useEffect(() => {
      if (searchTerm) {
        console.log('Search term changed:', searchTerm);
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

    const handleShowStats = (playerId) => {
      console.log('Player ID for stats:', playerId);
      setSelectedPlayerId(playerId); //set the selected player id
    };
    
    const handleCloseStats = () => {
      setSelectedPlayerId(null); // reset the selected player id
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
                      onShowStats={() => handleShowStats(player.id)} //passing function to trigger stats view
                  />
              ))
          ) : (
            <p>No players found. Try searching for a players!</p>
          )}
        </div>

        {selectedPlayerId && (
          <PlayerStats
            playerId={selectedPlayerId}
            onClose={handleCloseStats}
            />
        )}
      </div>
    );
}

export default App;
