import { useTheme } from "../../context/ThemeContext";
import type { Player } from "../../types/Team";

interface TeamPlayingXIProps {
  teamName: string;
  players: Player[];
}

import PlayerRow from "./PlayerRow";

const TeamPlayingXI = ({ teamName, players }: TeamPlayingXIProps) => {
  const { theme } = useTheme();

  const cardClass =
    theme === "light"
      ? "rounded-xl bg-white p-4 shadow"
      : "rounded-xl bg-slate-800 p-4 shadow border border-slate-700";

  const titleClass = theme === "light" ? "text-slate-900" : "text-slate-100";

  return (
    <div className={cardClass}>
      <h2 className={`mb-3 text-lg font-bold ${titleClass}`}>{teamName}</h2>

      {players.map((player) => (
        <PlayerRow key={player.id} player={player} />
      ))}
    </div>
  );
};

export default TeamPlayingXI;
