import type { BallResult } from "../types/Ball";

export function updateWickets(
  currentWickets: number,
  result: BallResult,
): number {
  if (result === "W") {
    return currentWickets + 1;
  }
  return currentWickets;
}
