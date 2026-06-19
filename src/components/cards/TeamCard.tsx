import { useTheme } from "../../context/ThemeContext";
import type { Team } from "../../types/Team";

interface TeamCardProps {
  team: Team;
  title: string;
  isUserTeam?: boolean;
  isComputerTeam?: boolean;
}

const TeamCard = ({
  team,
  title,
  isUserTeam,
  isComputerTeam,
}: TeamCardProps) => {
  if (!team) {
    return null;
  }
  const { theme } = useTheme();

  const containerClass =
    theme === "light"
      ? "bg-white rounded-2xl shadow-lg border border-slate-200 p-5 text-slate-900"
      : "bg-slate-800 rounded-2xl shadow-lg border border-slate-700 p-5 text-slate-100";

  const badgeClass =
    theme === "light"
      ? "px-4 py-2 bg-slate-100 rounded-full"
      : "px-4 py-2 bg-slate-700 rounded-full";

  const infoTextClass = theme === "light" ? "text-gray-700" : "text-slate-300";
  const getStrength = () => {
    if (team.batting > team.bowling) {
      return "🏏 Batting Heavy";
    }

    if (team.batting < team.bowling) {
      return "🎯 Bowling Heavy";
    }

    return "⚖️ Balanced Team";
  };
  console.log(`${title} Rendering:`, team.name);
  return (
    <div className={containerClass}>
      <h2 className="text-center text-xl font-bold mb-4">{title}</h2>

      <img
        src={team.image}
        alt={team.name}
        className="w-28 h-28 md:w-32 md:h-32 mx-auto object-cover rounded-full"
      />

      <h3 className="text-3xl font-bold text-center mt-4">{team.name}</h3>

      <div className="mt-6 space-y-2">
        <p className={infoTextClass}>🏏 Batting: {team.batting}</p>
        <p className={infoTextClass}>🎯 Bowling: {team.bowling}</p>
        <p className={infoTextClass}>🤾 Fielding: {team.fielding}</p>
        <p className={infoTextClass}>⭐ Overall: {team.overall}</p>
      </div>
      <div className="mt-4 text-center">
        <span className={badgeClass}>{getStrength()}</span>
      </div>
      {isUserTeam ? (
        <p className={`mt-4 text-center text-sm ${infoTextClass}`}>
          This is your team. Use the buttons below to change your selection.
        </p>
      ) : isComputerTeam ? (
        <p className={`mt-4 text-center text-sm ${infoTextClass}`}>
          This is Computers team. Use the buttons below to change your
          selection.
        </p>
      ) : null}
    </div>
  );
};

export default TeamCard;
