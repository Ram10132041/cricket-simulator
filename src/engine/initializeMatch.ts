import type { MatchPlayer, MatchState } from "../types/Match";
import type { Player } from "../types/Team";

export function initializeMatch(
  battingTeamId: number,
  bowlingTeamId: number,
  battingPlayers: Player[],
  openingBowler: Player,
): MatchState {
  const battingOrder: MatchPlayer[] = battingPlayers.map((player) => ({
    playerId: player.id,
    name: player.name,
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    isOut: false,
  }));

  return {
    innings: 1,

    battingTeamId,
    bowlingTeamId,

    score: 0,
    wickets: 0,

    overs: 0,
    balls: 0,

    battingOrder,

    striker: { ...battingOrder[0] },

    nonStriker: { ...battingOrder[1] },

    nextBatsmanIndex: 2,

    currentBowler: {
      playerId: openingBowler.id,
      name: openingBowler.name,
      overs: 0,
      balls: 0,
      runs: 0,
      wickets: 0,
    },

    lastBall: "-",
    overCompleted: false,
  };
}
