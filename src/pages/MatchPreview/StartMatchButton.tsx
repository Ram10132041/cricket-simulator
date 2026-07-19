import { useNavigate } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import { initializeMatch } from "../../engine/initializeMatch";
import type { Player } from "../../types/Team";

interface StartMatchButtonProps {
  bowlingPlayers: Player[];
  battingPlayers: Player[];
}

const StartMatchButton = ({
  battingPlayers,
  bowlingPlayers,
}: StartMatchButtonProps) => {
  const navigate = useNavigate();
  const { state, dispatch } = useGame();

  const handleStartMatch = () => {
    if (
      !state.battingTeamId ||
      !state.bowlingTeamId ||
      state.selectedPlayerIds.length < 2
    ) {
      return;
    }

    const match = initializeMatch(
      state.battingTeamId!,
      state.bowlingTeamId!,
      battingPlayers,
      bowlingPlayers[0],
    );

    dispatch({
      type: "SET_MATCH",
      payload: match,
    });

    navigate("/match");
  };

  return (
    <button
      onClick={handleStartMatch}
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
