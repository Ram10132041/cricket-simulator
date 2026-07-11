export function updateBalls(currentBalls: number): number {
  if (currentBalls === 5) {
    return 0;
  }
  return currentBalls + 1;
}
