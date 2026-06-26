import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../../context/GameContext";
import { useTheme } from "../../../context/ThemeContext";
import usePlayingXI from "../../../hooks/usePlayingXI";
import PlayerList from "./PlayerList";
import PlayingXIFooter from "./PlayingXIFooter";
import SelectionCounter from "./SelectionCounter";

const PlayingXI = () => {
  const navigate = useNavigate();
  const { state } = useGame();
  const { theme } = useTheme();

  const {
    players,
    selectedPlayers,
    togglePlayer,
    loadPlayers,
    submitPlayingXI,
  } = usePlayingXI();

  useEffect(() => {
    loadPlayers();
  }, [loadPlayers]);

  const teamPlayers = players.filter(
    (player) => player.teamId === state.userTeamId,
  );

  // Split into two columns: first 9 in column A, next 6 in column B
  const firstColumn = teamPlayers.slice(0, 9);
  const secondColumn = teamPlayers.slice(9, 15);

  const handleSubmit = () => {
    submitPlayingXI();
    navigate("/toss");
  };

  const outerClass =
    theme === "light"
      ? "min-h-screen flex items-center justify-center bg-slate-50 p-6"
      : "min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-black p-6";

  const cardClass =
    theme === "light"
      ? "w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 text-slate-900"
      : "w-full max-w-4xl bg-slate-800 rounded-2xl shadow-xl p-6 text-slate-100 border border-slate-700";

  return (
    <div className={outerClass}>
      <div className={cardClass}>
        <h2 className="text-2xl font-bold text-center mb-6">
          Select Playing XI
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* First column: 9 players */}
          <div className="flex-1">
            <div className="space-y-3">
              <PlayerList
                players={firstColumn}
                selectedPlayers={selectedPlayers}
                onToggle={togglePlayer}
                theme={theme}
              />
            </div>
          </div>

          {/* Second column: 6 players + submit button */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <PlayerList
                players={secondColumn}
                selectedPlayers={selectedPlayers}
                onToggle={togglePlayer}
                theme={theme}
              />
            </div>

            <div className="mt-6">
              <SelectionCounter count={selectedPlayers.length} />
              <PlayingXIFooter
                disabled={selectedPlayers.length !== 11}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingXI;
