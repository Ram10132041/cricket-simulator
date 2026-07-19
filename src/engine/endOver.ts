import type { MatchState } from "../types/Match";

export function endOver(match: MatchState): MatchState {
  return {
    ...match,

    striker: {
      ...match.nonStriker,
    },

    nonStriker: {
      ...match.striker,
    },

    overCompleted: true,
  };
}
