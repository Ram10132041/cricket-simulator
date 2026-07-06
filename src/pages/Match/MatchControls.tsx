import { useTheme } from "../../context/ThemeContext";

interface MatchControlsProps {
  onBowl: () => void;
}

const MatchControls = ({ onBowl }: MatchControlsProps) => {
  const { theme } = useTheme();

  const containerClass =
    theme === "light"
      ? "bg-white border border-slate-200"
      : "bg-slate-900 border border-slate-700";

  const titleClass = theme === "light" ? "text-slate-900" : "text-slate-100";

  const subtitleClass = theme === "light" ? "text-slate-500" : "text-slate-400";

  return (
    <div className={`${containerClass} rounded-2xl shadow-md p-5 mt-4`}>
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className={`text-lg font-bold ${titleClass}`}>
          ⚡ Ready for the Next Ball
        </h2>

        <p className={`text-sm mt-1 ${subtitleClass}`}>
          Click the button below to bowl the next delivery.
        </p>
      </div>

      {/* Bowl Button */}
      <button
        onClick={onBowl}
        className="
          w-full
          py-4
          rounded-xl
          bg-green-600
          hover:bg-green-700
          active:scale-95
          transition-all
          duration-300
          text-white
          text-lg
          font-bold
          shadow-lg
        "
      >
        🏏 BOWL
      </button>
    </div>
  );
};

export default MatchControls;
