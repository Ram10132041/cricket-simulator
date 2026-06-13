import axios from "axios";
import type { Team } from "../types/Team";

const API_URL = "http://localhost:3001/teams";

export const getTeams = async (): Promise<Team[]> => {
  const response = await axios.get<Team[]>(API_URL);
  return response.data;
};
