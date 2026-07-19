import type { MatchPlayer, MatchState } from "../types/Match";

export function changeBowler(
  match: MatchState,
  bowler: MatchPlayer,
): MatchState {
  return {
    ...match,
    currentBowler: {
      ...bowler,
      overs: 0,
      wickets: 0,
    },
    overCompleted: false,
  };
}
