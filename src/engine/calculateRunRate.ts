export function calculateRunRate(
  score: number,
  overs: number,
  balls: number,
): number {
  const totalOvers = overs + balls / 6;

  if (totalOvers === 0) {
    return 0;
  }

  return Number((score / totalOvers).toFixed(2));
}
