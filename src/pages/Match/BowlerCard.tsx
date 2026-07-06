import { useTheme } from "../../context/ThemeContext";
import BowlerInfo from "./BowlerInfo";

interface BowlerCardProps {
  name: string;
  overs: number;
  balls: number;
  runs: number;
  wickets: number;
}
const BowlerCard = ({ name, overs, balls, runs, wickets }: BowlerCardProps) => {
  const { theme } = useTheme();

  const containerClass =
    theme === "light"
      ? "bg-white border border-slate-200"
      : "bg-slate-900 border border-slate-700";
  const headingClass = theme === "light" ? "text-slate-900" : "text-slate-100";

  const dividerClass =
    theme === "light" ? "border-slate-200" : "border-slate-700";
  return (
    <div className={`${containerClass} rounded-2xl shadow-md overflow-hidden`}>
      <div className="p-4">
        <h3 className={`text-md font-semibold ${headingClass}`}>Bowler</h3>
        <div className={`border-t mt-3 ${dividerClass}`} />
        <BowlerInfo
          name={name}
          overs={overs}
          balls={balls}
          runs={runs}
          wickets={wickets}
        />
      </div>
    </div>
  );
};

export default BowlerCard;
