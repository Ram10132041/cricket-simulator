import { changeBowler } from "../engine/changeBowler";
import { updateMatch } from "../engine/updateMatch";
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
    case "UPDATE_MATCH":
      if (!state.match) {
        return state;
      }

      return {
        ...state,
        match: updateMatch(state.match, action.payload),
      };

    case "CHANGE_BOWLER":
      return {
        ...state,
        match: state.match ? changeBowler(state.match, action.payload) : null,
      };

    default:
      return state;
  }
};
