export function changeBowler(nextBowlerId: number) {
  return {
    playerId: nextBowlerId,
    overs: 0,
    balls: 0,
    runs: 0,
    wickets: 0,
  };
}
