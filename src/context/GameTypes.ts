import type { MatchState } from "../types/Match";

export interface GameState {
  userTeamId: number | null;
  computerTeamId: number | null;
  selectedPlayerIds: number[];
  tossWinner: "USER" | "COMPUTER" | null;
  battingTeamId: number | null;
  bowlingTeamId: number | null;
  match: MatchState | null;
}

export const initialState: GameState = {
  userTeamId: null,
  computerTeamId: null,
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
    };
