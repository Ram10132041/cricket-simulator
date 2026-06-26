import { useEffect, useState } from "react";
import { useGame } from "../context/GameContext";
import { getPlayers } from "../services/playerService";
import type { Player } from "../types/Team";
import { getBestXI } from "../utils/teamUtils";

const usePlayingXI = () => {
  const { state, dispatch } = useGame();
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);

  useEffect(() => {
    if (state.userTeamId == null) return;

    const userTeamPlayers = players.filter(
      (player) => player.teamId === state.userTeamId,
    );

    if (userTeamPlayers.length > 0 && selectedPlayers.length === 0) {
      const defaultXI = getBestXI(userTeamPlayers).map((player) => player.id);
      setSelectedPlayers(defaultXI);
    }
  }, [players, selectedPlayers.length, state.userTeamId]);

  const togglePlayer = (playerId: number) => {
    setSelectedPlayers((prevSelected) => {
      if (prevSelected.includes(playerId)) {
        return prevSelected.filter((id) => id !== playerId);
      }
      if (prevSelected.length >= 11) {
        return prevSelected;
      }
      return [...prevSelected, playerId];
    });
  };

  const loadPlayers = async () => {
    const data = await getPlayers();
    setPlayers(data);

    const userTeamPlayers = data.filter(
      (player) => player.teamId === state.userTeamId,
    );

    if (userTeamPlayers.length > 0 && selectedPlayers.length === 0) {
      const defaultXI = getBestXI(userTeamPlayers).map((player) => player.id);
      setSelectedPlayers(defaultXI);
    }
  };

  const submitPlayingXI = () => {
    // dispatch selected playing XI to context
    dispatch({ type: "SET_PLAYING_XI", payload: selectedPlayers });
    console.log("Submitted playing XI:", selectedPlayers);
  };

  return {
    players,
    selectedPlayers,
    togglePlayer,
    loadPlayers,
    submitPlayingXI,
  };
};

export default usePlayingXI;
