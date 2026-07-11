import type { BallResult } from "../types/Ball";

export function updateScore(currentScore: number, result: BallResult): number {
  if (result === "W") {
    return currentScore;
  }

  return currentScore + result;
}
