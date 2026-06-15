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
    <div
      className="
        bg-white
        rounded-2xl
        shadow-2xl
        p-6
        w-full
        max-w-md
        md:w-[400px]
      "
    >
      <h2 className="text-center text-xl font-bold mb-4">{title}</h2>

      <img
        src={team.image}
        alt={team.name}
        className="w-28 h-28 md:w-32 md:h-32 mx-auto object-cover rounded-full"
      />

      <h3 className="text-3xl font-bold text-center mt-4">{team.name}</h3>

      <div className="mt-6 space-y-2">
        <p>🏏 Batting: {team.batting}</p>
        <p>🎯 Bowling: {team.bowling}</p>
        <p>🤾 Fielding: {team.fielding}</p>
        <p>⭐ Overall: {team.overall}</p>
      </div>
      <div className="mt-4 text-center">
        <span className="px-4 py-2 bg-slate-100 rounded-full">
          {getStrength()}
        </span>
      </div>
      {isUserTeam ? (
        <p className="mt-4 text-center text-sm text-gray-500">
          This is your team. Use the buttons below to change your selection.
        </p>
      ) : isComputerTeam ? (
        <p className="mt-4 text-center text-sm text-gray-500">
          This is Computers team. Use the buttons below to change your
          selection.
        </p>
      ) : null}
    </div>
  );
};

export default TeamCard;
