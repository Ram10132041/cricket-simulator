import type { Player } from "../types/Team";

export const getPlayerRating = (player: Player) => {
  return player.batting + player.bowling + player.fielding + player.experience;
};
export const getBestXI = (players: Player[]) => {
  const sortedPlayers = [...players].sort(
    (a, b) => getPlayerRating(b) - getPlayerRating(a),
  );

  return sortedPlayers.slice(0, 11);
};
