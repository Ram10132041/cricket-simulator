export function updateOvers(
  currentOvers: number,
  currentBalls: number,
): number {
  if (currentBalls === 5) {
    return currentOvers + 1;
  }
  return currentOvers;
}
