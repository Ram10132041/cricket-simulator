import type { Player } from "../../../types/Team";
import PlayerCard from "./PlayerCard";

interface PlayerListProps {
  players: Player[];
  selectedPlayers: number[];
  onToggle: (playerId: number) => void;
  theme: "light" | "dark";
}

const PlayerList = ({
  players,
  selectedPlayers,
  onToggle,
  theme,
}: PlayerListProps) => {
  return (
    <div className="space-y-3">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          checked={selectedPlayers.includes(player.id)}
          onToggle={onToggle}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default PlayerList;
