import { BalldontlieAPI } from "@balldontlie/sdk";

const api = new BalldontlieAPI({ apiKey: import.meta.env.VITE_API_KEY });

export const fetchPlayers = async (query) => {
  try {
    console.log(`Fetching players with query: ${query}`);
    const response = await api.nba.getPlayers({ search: query });
    console.log(`API response:`, response);
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};

export const getTeams = async () => {
  try {
    const response = await api.nba.getTeams();
    return response.data;
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw error;
  }
};