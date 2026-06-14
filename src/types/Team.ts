export interface Team {
  id: number;
  name: string;
  country: string;
  image: string;
  batting: number;
  bowling: number;
  fielding: number;
  overall: number;
}

export type PlayerRole = "BATTER" | "BOWLER" | "ALL_ROUNDER" | "WICKET_KEEPER";

export interface Player {
  id: number;
  teamId: number;
  name: string;

  role: PlayerRole;

  isCaptain: boolean;

  batting: number;
  bowling: number;
  fielding: number;

  aggression: number;
  consistency: number;
  fitness: number;
  experience: number;
}
