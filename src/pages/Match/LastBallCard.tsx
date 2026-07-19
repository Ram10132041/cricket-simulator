import { useTheme } from "../../context/ThemeContext";
import type { BallResult } from "../../types/Ball";

interface LastBallCardProps {
  result: BallResult | string;
}
const LastBallCard = ({ result }: LastBallCardProps) => {
  const { theme } = useTheme();
  const containerClass =
    theme === "light"
      ? "bg-white border border-slate-200"
      : "bg-slate-900 border border-slate-700";
  return (
    <div className={`${containerClass} rounded-2xl shadow-md overflow-hidden`}>
      <div className="p-4">Last Ball : {result}</div>
    </div>
  );
};

export default LastBallCard;
