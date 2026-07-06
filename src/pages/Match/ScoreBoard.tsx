import { useTheme } from "../../context/ThemeContext";

interface ScoreBoardProps {
  battingTeam: string;
  score: number;
  wickets: number;
  overs: number;
  balls: number;
  runRate: number;
}

const ScoreBoard = ({
  battingTeam,
  score,
  wickets,
  overs,
  balls,
  runRate,
}: ScoreBoardProps) => {
  const { theme } = useTheme();

  const containerClass =
    theme === "light"
      ? "bg-white border border-slate-200"
      : "bg-slate-900 border border-slate-700";

  const headingClass = theme === "light" ? "text-slate-900" : "text-slate-100";

  const labelClass = theme === "light" ? "text-slate-500" : "text-slate-400";

  const valueClass = theme === "light" ? "text-slate-900" : "text-slate-100";

  const dividerClass =
    theme === "light" ? "border-slate-200" : "border-slate-700";

  const oversText = `${overs}.${balls} / 20`;

  return (
    <div className={`${containerClass} rounded-2xl shadow-md overflow-hidden`}>
      {/* Team Header */}
      <div className="p-5 text-center">
        <h2 className={`text-xl font-bold ${headingClass}`}>
          🏏 {battingTeam.toUpperCase()}
        </h2>

        <h1
          className={`mt-3 text-5xl font-extrabold tracking-wide ${headingClass}`}
        >
          {score}/{wickets}
        </h1>
      </div>

      {/* Divider */}
      <div className={`border-t ${dividerClass}`} />

      {/* Match Stats */}
      <div className="grid grid-cols-2 text-center">
        <div className="py-4">
          <p className={`text-sm ${labelClass}`}>Overs</p>

          <p className={`mt-1 text-lg font-semibold ${valueClass}`}>
            {oversText}
          </p>
        </div>

        <div className={`py-4 border-l ${dividerClass}`}>
          <p className={`text-sm ${labelClass}`}>Run Rate</p>

          <p className={`mt-1 text-lg font-semibold ${valueClass}`}>
            {runRate.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className={`border-t ${dividerClass}`} />

      {/* Future Stats */}
      <div className="grid grid-cols-2 text-center">
        <div className="py-4">
          <p className={`text-sm ${labelClass}`}>Partnership</p>

          <p className={`mt-1 font-semibold ${valueClass}`}>--</p>
        </div>

        <div className={`py-4 border-l ${dividerClass}`}>
          <p className={`text-sm ${labelClass}`}>Projected</p>

          <p className={`mt-1 font-semibold ${valueClass}`}>--</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
