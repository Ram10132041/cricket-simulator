export function updateBalls(currentBalls: number): number {
  return currentBalls === 5 ? 0 : currentBalls + 1;
}
