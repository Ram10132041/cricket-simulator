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
            px-10 py-5
            text-2xl font-bold
            text-white
            bg-blue-600
            rounded-2xl
            shadow-xl
            hover:bg-blue-700
            hover:shadow-2xl
            transition-all
            duration-300
          "
      >
        🚀 Start
      </button>
    </div>
  );
};

export default Home;
