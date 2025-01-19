export const getPlayerStats = async (playerId) => {
    console.log('Fetching player stats for player ID:', playerId); //log the player ID
  try {
    const response = await fetch(`/nba-stats/stats/playergamelog?PlayerID=${playerId}`, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
        },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Stats API response:', data); //log the response
    return data;
  } catch (error) {
    console.error("Error fetching player stats:", error);
    throw error;
  }
};