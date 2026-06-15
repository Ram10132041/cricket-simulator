import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import { getPlayers } from "../../services/playerService";
import type { Player } from "../../types/Team";

const PlayingEleven = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useGame();
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]); // Store selected player IDs

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    const data = await getPlayers();
    setPlayers(data);
  };

  const teamPlayers = players.filter(
    (player) => player.teamId === state.userTeamId,
  );

  // Split into two columns: first 9 in column A, next 6 in column B
  const firstColumn = teamPlayers.slice(0, 9);
  const secondColumn = teamPlayers.slice(9, 15);

  const togglePlayer = (playerId: number) => {
    setSelectedPlayers((prevSelected) => {
      if (prevSelected.includes(playerId)) {
        return prevSelected.filter((id) => id !== playerId);
      }
      if (prevSelected.length >= 11) {
        return prevSelected; // Prevent selecting more than 11 players
      }
      return [...prevSelected, playerId];
    });
  };

  const submitSelected = () => {
    // dispatch selected playing XI to context
    dispatch({ type: "SET_PLAYING_XI", payload: selectedPlayers });
    console.log("Submitted playing XI:", selectedPlayers);
    navigate("/toss");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Select Playing XI
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* First column: 9 players */}
          <div className="flex-1">
            <div className="space-y-3">
              {firstColumn.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between border p-3 rounded-lg"
                >
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedPlayers.includes(player.id)}
                      onChange={() => togglePlayer(player.id)}
                      className="w-4 h-4"
                    />
                    <span className="font-medium">{player.name}</span>
                  </label>
                  <span className="text-sm text-gray-500">{player.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second column: 6 players + submit button */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              {secondColumn.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between border p-3 rounded-lg"
                >
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedPlayers.includes(player.id)}
                      onChange={() => togglePlayer(player.id)}
                      className="w-4 h-4"
                    />
                    <span className="font-medium">{player.name}</span>
                  </label>
                  <span className="text-sm text-gray-500">{player.role}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-4 text-center">
                Selected: {selectedPlayers.length} / 11
              </div>
              <button
                onClick={submitSelected}
                className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                disabled={selectedPlayers.length !== 11}
              >
                Submit Playing XI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingEleven;
