import type { BallResult } from "../types/Ball";
import type { MatchPlayer, MatchState } from "../types/Match";
import type { Team } from "../types/Team";

export interface GameState {
  userTeamId: number | null;
  computerTeamId: number | null;

  userTeam: Team | null;
  computerTeam: Team | null;

  selectedPlayerIds: number[];

  tossWinner: "USER" | "COMPUTER" | null;

  battingTeamId: number | null;
  bowlingTeamId: number | null;

  match: MatchState | null;
}

export const initialState: GameState = {
  userTeamId: null,
  computerTeamId: null,

  userTeam: null,
  computerTeam: null,

  selectedPlayerIds: [],

  tossWinner: null,

  battingTeamId: null,
  bowlingTeamId: null,

  match: null,
};

export type GameAction =
  | {
      type: "SET_TEAMS";
      payload: {
        userTeamId: number;
        computerTeamId: number;
      };
    }
  | {
      type: "SET_PLAYING_XI";
      payload: number[];
    }
  | {
      type: "SET_TOSS_RESULT";
      payload: {
        tossWinner: "USER" | "COMPUTER";
        battingTeamId: number;
        bowlingTeamId: number;
      };
    }
  | {
      type: "SET_MATCH";
      payload: MatchState;
    }
  | {
      type: "UPDATE_MATCH";
      payload: BallResult;
    }
  | {
      type: "CHANGE_BOWLER";
      payload: MatchPlayer;
    }
  | {
      type: "RESET_OVER_COMPLETED";
    };
