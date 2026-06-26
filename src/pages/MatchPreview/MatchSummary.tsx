import { useTheme } from "../../context/ThemeContext";

import type { Team } from "../../types/Team";

interface MatchSummaryProps {
  userTeam: Team | null;
  computerTeam: Team | null;
  tossWinner: "USER" | "COMPUTER" | null;
  battingTeamId: number | null;
  bowlingTeamId: number | null;
}

const MatchSummary = ({
  userTeam,
  computerTeam,
  tossWinner,
  battingTeamId,
  bowlingTeamId,
}: MatchSummaryProps) => {
  const { theme } = useTheme();
  const containerClass =
    theme === "light"
      ? "rounded-2xl bg-white p-5 shadow-lg text-slate-900"
      : "rounded-2xl bg-slate-900 p-5 shadow-lg text-slate-100";

  const mutedTextClass = theme === "light" ? "text-gray-500" : "text-slate-400";
  const userTeamName = userTeam?.name ?? "Your Team";
  const computerTeamName = computerTeam?.name ?? "Computer Team";
  const tossWinnerName =
    tossWinner === "USER" ? userTeamName : computerTeamName;

  const battingTeam =
    battingTeamId === userTeam?.id ? userTeamName : computerTeamName;
  const bowlingTeam =
    bowlingTeamId === userTeam?.id ? userTeamName : computerTeamName;
  return (
    <div className={containerClass}>
      <h1 className="text-2xl font-bold text-center">🏏 Match Preview</h1>

      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold">{userTeamName}</h2>

        <p className={`my-2 ${mutedTextClass}`}>VS</p>

        <h2 className="text-xl font-semibold">{computerTeamName}</h2>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span>🏆 Toss Winner</span>
          <span>{tossWinnerName}</span>
        </div>

        <div className="flex justify-between">
          <span>🪙 Batting First</span>
          <span>{battingTeam}</span>
        </div>

        <div className="flex justify-between">
          <span>🎯 Bowling First</span>
          <span>{bowlingTeam}</span>
        </div>

        <div className="flex justify-between">
          <span>🏟 Stadium</span>
          <span>MCG</span>
        </div>

        <div className="flex justify-between">
          <span>🎯 Match</span>
          <span>T20 (20 Overs)</span>
        </div>
      </div>
    </div>
  );
};

export default MatchSummary;
