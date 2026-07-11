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

    case "SET_TOSS_RESULT":
      console.log("Reducer received toss result:", action.payload);
      return {
        ...state,
        tossWinner: action.payload.tossWinner,
        battingTeamId: action.payload.battingTeamId,
        bowlingTeamId: action.payload.bowlingTeamId,
      };
    case "SET_MATCH":
      return {
        ...state,
        match: action.payload,
      };

    default:
      return state;
  }
};
