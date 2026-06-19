import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/team-selection");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <button
        onClick={handleStart}
        className="
            bg-emerald-600
    text-white
    px-8
    py-4
    rounded-xl
    transition-all
    duration-300
    hover:scale-105
          "
      >
        🚀 Start
      </button>
    </div>
  );
};

export default Home;
