import type { BallResult } from "../types/Ball";

export function playBall(): BallResult {
  const outcomes: BallResult[] = [0, 1, 2, 3, 4, 6, "W"];
  const index = Math.floor(Math.random() * outcomes.length);
  return outcomes[index];
}
