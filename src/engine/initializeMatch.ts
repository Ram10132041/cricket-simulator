import type { MatchState } from "../types/Match";

export function initializeMatch(
  battingTeamId: number,
  bowlingTeamId: number,
  battingOrder: number[],
  openingBowlerId: number,
): MatchState {
  return {
    innings: 1,

    battingTeamId,
    bowlingTeamId,

    score: 0,
    wickets: 0,

    overs: 0,
    balls: 0,

    battingOrder,

    striker: {
      playerId: battingOrder[0],
      name: "Striker",
      runs: 0,
      balls: 0,
      fours: 0,
      sixes: 0,
      isOut: false,
    },

    nonStriker: {
      playerId: battingOrder[1],
      name: "Non Striker",
      runs: 0,
      balls: 0,
      fours: 0,
      sixes: 0,
      isOut: false,
    },

    nextBatsmanIndex: 2,

    currentBowler: {
      playerId: openingBowlerId,
      overs: 0,
      balls: 0,
      runs: 0,
      wickets: 0,
    },

    lastBall: "-",
  };
}
