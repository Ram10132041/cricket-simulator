import { useTheme } from "../../context/ThemeContext";
import type { Player } from "../../types/Team";

interface PlayerRowProps {
  player: Player;
}

const PlayerRow = ({ player }: PlayerRowProps) => {
  const { theme } = useTheme();

  const rowClass =
    theme === "light"
      ? "flex items-center justify-between border-b border-slate-200 py-2"
      : "flex items-center justify-between border-b border-slate-700 py-2";

  const nameClass = theme === "light" ? "text-slate-900" : "text-slate-100";
  const roleClass = theme === "light" ? "text-gray-500" : "text-slate-400";

  return (
    <div className={rowClass}>
      <span className={`font-medium ${nameClass}`}>{player.name}</span>

      <span className={`text-xs ${roleClass}`}>{player.role}</span>
    </div>
  );
};
export default PlayerRow;
