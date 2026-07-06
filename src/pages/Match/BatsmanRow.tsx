import { useTheme } from "../../context/ThemeContext";

interface BatsmanRowProps {
  name: string;
  runs: number;
  balls: number;
  isStriker?: boolean;
}

const BatsmanRow = ({
  name,
  runs,
  balls,
  isStriker = false,
}: BatsmanRowProps) => {
  const { theme } = useTheme();
  const labelClass = theme === "light" ? "text-slate-500" : "text-slate-400";
  const valueClass = theme === "light" ? "text-slate-900" : "text-slate-100";
  const sr = balls > 0 ? (runs / balls) * 100 : 0;
  const srText = sr ? sr.toFixed(1) : "0.0";
  const labelCls = labelClass ?? "text-slate-500 dark:text-slate-400";
  const valueCls = valueClass ?? "text-slate-900 dark:text-slate-100";

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        {isStriker ? (
          <span className="text-emerald-500">●</span>
        ) : (
          <span className="w-3" />
        )}

        <span className={`font-medium ${valueCls}`}>{name}</span>
      </div>

      <div className={`flex items-center gap-4 text-sm ${labelCls}`}>
        <span className={`font-semibold ${valueCls}`}>{runs}</span>
        <span className={labelCls}>{balls}</span>
        <span className={`font-medium ${valueCls}`}>{srText}</span>
      </div>
    </div>
  );
};

export default BatsmanRow;
