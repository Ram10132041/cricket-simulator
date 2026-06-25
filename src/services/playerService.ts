import axios from "axios";
import type { Player } from "../types/Team";

export const getPlayers = async (): Promise<Player[]> => {
  const response = await axios.get("/data/players.json");
  return response.data.players;
};
