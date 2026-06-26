import type { Player } from "../../../types/Team";

interface PlayerCardProps {
  player: Player;
  checked: boolean;
  onToggle: (playerId: number) => void;
  theme: "light" | "dark";
}

const PlayerCard = ({ player, checked, onToggle, theme }: PlayerCardProps) => {
  const roleTextClass =
    theme === "light" ? "text-sm text-gray-500" : "text-sm text-slate-300";

  const playerItemClass =
    theme === "light"
      ? "flex items-center justify-between border p-3 rounded-lg"
      : "flex items-center justify-between border border-slate-700 p-3 rounded-lg bg-slate-900/40";

  return (
    <div className={playerItemClass}>
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(player.id)}
          className="w-4 h-4"
        />

        <span className="font-medium">{player.name}</span>
      </label>

      <span className={roleTextClass}>{player.role}</span>
    </div>
  );
};

export default PlayerCard;
