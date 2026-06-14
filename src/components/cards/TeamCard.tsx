import type { Team } from "../../types/Team";

interface TeamCardProps {
  team: Team;
  title: string;
}

const TeamCard = ({ team, title }: TeamCardProps) => {
  if (!team) {
    return null;
  }
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-2xl
        p-6
        w-[400px]
      "
    >
      <h2 className="text-center text-xl font-bold mb-4">{title}</h2>

      <img src={team.image} alt={team.name} className="w-32 h-32 mx-auto" />

      <h3 className="text-3xl font-bold text-center mt-4">{team.name}</h3>

      <div className="mt-6 space-y-2">
        <p>🏏 Batting: {team.batting}</p>
        <p>🎯 Bowling: {team.bowling}</p>
        <p>🤾 Fielding: {team.fielding}</p>
        <p>⭐ Overall: {team.overall}</p>
      </div>
    </div>
  );
};

export default TeamCard;
