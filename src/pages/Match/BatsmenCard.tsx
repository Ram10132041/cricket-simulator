import { useTheme } from "../../context/ThemeContext";
import BatsmanRow from "./BatsmanRow";

interface BatsmenCardProps {
  strikerName: string;
  strikerRuns: number;
  strikerBalls: number;
  nonStrikerName: string;
  nonStrikerRuns: number;
  nonStrikerBalls: number;
}

const BatsmenCard = ({
  strikerName,
  strikerRuns,
  strikerBalls,
  nonStrikerName,
  nonStrikerRuns,
  nonStrikerBalls,
}: BatsmenCardProps) => {
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
        <h3 className={`text-md font-semibold ${headingClass}`}>Batsmen</h3>

        <div className={`border-t mt-3 ${dividerClass}`} />

        <div className="mt-3 space-y-2">
          <BatsmanRow
            name={strikerName}
            runs={strikerRuns}
            balls={strikerBalls}
            isStriker
          />
          <BatsmanRow
            name={nonStrikerName}
            runs={nonStrikerRuns}
            balls={nonStrikerBalls}
          />
        </div>
      </div>
    </div>
  );
};

export default BatsmenCard;
