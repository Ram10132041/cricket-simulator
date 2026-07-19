import type { BallResult } from "../types/Ball";
import type { MatchBowler } from "../types/Match";

export function updateBowler(
  bowler: MatchBowler,
  result: BallResult,
): MatchBowler {
  const nextBalls = bowler.balls === 5 ? 0 : bowler.balls + 1;
  const nextOvers = bowler.balls === 5 ? bowler.overs + 1 : bowler.overs;

  const updated = {
    ...bowler,
    overs: nextOvers,
    balls: nextBalls,
  };

  if (result === "W") {
    return { ...updated, wickets: bowler.wickets + 1 };
  }
  if (typeof result === "number") {
    return { ...updated, runs: bowler.runs + result };
  }
  return updated;
}
