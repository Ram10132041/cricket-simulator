export interface GameState {
  userTeamId: number | null;
  computerTeamId: number | null;
  selectedPlayerIds: number[];
}

export const initialState: GameState = {
  userTeamId: null,
  computerTeamId: null,
  selectedPlayerIds: [],
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
    };
