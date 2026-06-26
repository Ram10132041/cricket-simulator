import { useGame } from "../context/GameContext";
import { useTheme } from "../context/ThemeContext";
import MatchSummary from "./MatchPreview/MatchSummary";

import { useEffect, useState } from "react";
import { getPlayers } from "../services/playerService";
import { getTeams } from "../services/teamService";
import type { Player, Team } from "../types/Team";
import { getBestXI } from "../utils/teamUtils";
import TeamPlayingXI from "./MatchPreview/TeamPlayingXI";

const MatchPreview = () => {
  const { theme } = useTheme();
  const { state } = useGame();
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const playersData = await getPlayers();
      const teamsData = await getTeams();
      setPlayers(playersData);
      setTeams(teamsData);
    };

    loadData();
  }, []);

  const userTeam = teams.find((team) => team.id === state.userTeamId);
  const computerTeam = teams.find((team) => team.id === state.computerTeamId);
  const userTeamName = userTeam?.name ?? "Your Team";
  const computerTeamName = computerTeam?.name ?? "Computer Team";
  const userPlayingXI = players.filter((player) =>
    state.selectedPlayerIds.includes(player.id),
  );

  const computerPlayers = players.filter(
    (player) => player.teamId === state.computerTeamId,
  );
  const computerPlayingXI = getBestXI(computerPlayers);
  const isReady = Boolean(userTeam && computerTeam);

  const containerClass =
    theme === "light"
      ? "min-h-screen bg-slate-100 px-4 py-8 text-slate-900"
      : "min-h-screen bg-slate-950 px-4 py-8 text-slate-100";

  const cardClass =
    theme === "light"
      ? "mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-xl"
      : "mx-auto max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl";

  return (
    <div className={containerClass}>
      <div className={cardClass}>
        <h1 className="text-2xl font-bold">Match Preview</h1>
        <div className="mt-3 text-sm opacity-80">
          {!isReady ? (
            <p>Loading match preview...</p>
          ) : (
            <>
              <MatchSummary
                userTeam={userTeam ?? null}
                computerTeam={computerTeam ?? null}
                tossWinner={state.tossWinner}
                battingTeamId={state.battingTeamId}
                bowlingTeamId={state.bowlingTeamId}
              />

              <div className="mt-6 space-y-6">
                <TeamPlayingXI
                  teamName={userTeamName}
                  players={userPlayingXI}
                />

                <TeamPlayingXI
                  teamName={computerTeamName}
                  players={computerPlayingXI}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchPreview;
