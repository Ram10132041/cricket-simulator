import { useNavigate } from "react-router-dom";

const StartMatchButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/match")}
      className="
        w-full
        mt-6
        py-4
        rounded-xl
        bg-green-600
        text-white
        font-semibold
        shadow-lg
        hover:bg-green-700
        transition-all
        duration-300
      "
    >
      🏏 Start Match
    </button>
  );
};

export default StartMatchButton;
