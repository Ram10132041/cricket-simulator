import type { MatchState } from "../types/Match";

export function endInnings(match: MatchState): MatchState {
  return {
    ...match,
    innings: 2,
    score: 0,
    wickets: 0,
    overs: 0,
    balls: 0,
    lastBall: "-",
  };
}
