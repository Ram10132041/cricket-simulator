import type { GameAction, GameState } from "./GameTypes";

export const gameReducer = (
  state: GameState,
  action: GameAction,
): GameState => {
  switch (action.type) {
    case "SET_TEAMS":
      return {
        ...state,

        userTeamId: action.payload.userTeamId,

        computerTeamId: action.payload.computerTeamId,
      };

    case "SET_PLAYING_XI":
      return {
        ...state,

        selectedPlayerIds: action.payload,
      };

    default:
      return state;
  }
};
