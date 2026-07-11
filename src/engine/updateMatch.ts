import type { BallResult } from "../types/Ball";
import type { MatchState } from "../types/Match";
import { updateBalls } from "./updateBalls";
import { updateOvers } from "./updateOvers";
import { updateScore } from "./updateScore";
import { updateWickets } from "./updateWickets";

export function updateMatch(match: MatchState, result: BallResult): MatchState {
  const balls = updateBalls(match.balls);
  const overs = updateOvers(match.overs, match.balls);

  return {
    ...match,
    score: updateScore(match.score, result),
    wickets: updateWickets(match.wickets, result),
    balls,
    overs,
    lastBall: String(result),
  };
}
