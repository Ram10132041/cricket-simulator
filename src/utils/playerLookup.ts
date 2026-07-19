import type { Player } from "../types/Team";

export function getPlayerById(
  id: number,
  players: Player[],
): Player | undefined {
  return players.find((player) => player.id === id);
}

export function getPlayerName(id: number, players: Player[]): string {
  return getPlayerById(id, players)?.name ?? "Unknown";
}
