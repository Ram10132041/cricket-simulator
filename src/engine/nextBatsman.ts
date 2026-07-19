import type { MatchState } from "../types/Match";

export function nextBatsman(
  match: MatchState,
  wicketOnStriker: boolean = true,
): MatchState {
  if (match.nextBatsmanIndex >= match.battingOrder.length) {
    return match;
  }

  const nextPlayer = {
    ...match.battingOrder[match.nextBatsmanIndex],
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    isOut: false,
  };

  return {
    ...match,
    striker: wicketOnStriker ? nextPlayer : match.striker,
    nonStriker: wicketOnStriker ? match.nonStriker : nextPlayer,
    nextBatsmanIndex: match.nextBatsmanIndex + 1,
  };
}
