export interface GameState {
  userTeamId: number | null;
  computerTeamId: number | null;
  selectedPlayerIds: number[];
  tossWinner: "USER" | "COMPUTER" | null;
  battingTeam: "USER" | "COMPUTER" | null;
  bowlingTeam: "USER" | "COMPUTER" | null;
}

export const initialState: GameState = {
  userTeamId: null,
  computerTeamId: null,
  selectedPlayerIds: [],
  tossWinner: null,
  battingTeam: null,
  bowlingTeam: null,
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
        battingTeam: "USER" | "COMPUTER";
        bowlingTeam: "USER" | "COMPUTER";
      };
    };
