import type { BallResult } from "../types/Ball";
import type { MatchPlayer } from "../types/Match";

export function updateBatsman(
  batsman: MatchPlayer,
  result: BallResult,
): MatchPlayer {
  // Wicket
  if (result === "W") {
    return {
      ...batsman,
      balls: batsman.balls + 1,
      isOut: true,
    };
  }

  // Four
  if (result === 4) {
    return {
      ...batsman,
      runs: batsman.runs + 4,
      balls: batsman.balls + 1,
      fours: batsman.fours + 1,
    };
  }

  // Six
  if (result === 6) {
    return {
      ...batsman,
      runs: batsman.runs + 6,
      balls: batsman.balls + 1,
      sixes: batsman.sixes + 1,
    };
  }

  // 0, 1, 2, 3
  return {
    ...batsman,
    runs: batsman.runs + result,
    balls: batsman.balls + 1,
  };
}
