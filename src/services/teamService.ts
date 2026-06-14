import axios from "axios";
import type { Team } from "../types/Team";

export const getTeams = async (): Promise<Team[]> => {
  const response = await axios.get<{ teams: Team[] }>("/data/teams.json");
  return response.data.teams;
};
