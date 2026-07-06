import { useTheme } from "../../context/ThemeContext";

interface BowlerInfoProps {
  name: string;
  overs: number;
  balls: number;
  runs: number;
  wickets: number;
}
const BowlerInfo = ({ name, overs, balls, runs, wickets }: BowlerInfoProps) => {
  const { theme } = useTheme();
  const labelCls = theme === "light" ? "text-slate-500" : "text-slate-400";
  const valueCls = theme === "light" ? "text-slate-900" : "text-slate-100";

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <span className={`font-medium ${valueCls}`}>{name}</span>
      </div>

      <div className={`flex items-center gap-4 text-sm ${labelCls}`}>
        <span className={`font-semibold ${valueCls}`}>
          {overs}.{balls}
        </span>
        <span className={labelCls}>{runs}</span>
        <span className={`font-medium ${valueCls}`}>{wickets}</span>
      </div>
    </div>
  );
};

export default BowlerInfo;
