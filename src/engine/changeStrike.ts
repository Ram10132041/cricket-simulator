import type { BallResult } from "../types/Ball";
import type { MatchPlayer } from "../types/Match";

interface ChangeStrikeResult {
  striker: MatchPlayer;
  nonStriker: MatchPlayer;
}

export function changeStrike(
  striker: MatchPlayer,
  nonStriker: MatchPlayer,
  result: BallResult,
): ChangeStrikeResult {
  // Strike changes only for odd runs
  if (result === 1 || result === 3) {
    return {
      striker: nonStriker,
      nonStriker: striker,
    };
  }

  return {
    striker,
    nonStriker,
  };
}
