import axios from "axios";

export const getPlayers = async () => {
  const response = await axios.get("/data/players.json");
  return response.data.players;
};
