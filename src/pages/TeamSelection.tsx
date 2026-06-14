import { useEffect, useState } from "react";
import TeamCard from "../components/cards/TeamCard";
import { getTeams } from "../services/teamService";
import type { Team } from "../types/Team";

const TeamSelection = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectionCount, setSelectionCount] = useState(0);

  const [userTeam, setUserTeam] = useState(0);
  const [computersTeam, setComputersTeam] = useState(1);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    try {
      const data = await getTeams();
      setTeams(data);
    } catch (error) {
      console.error("Failed to load teams", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserNext = () => {
    let next = (userTeam + 1) % teams.length;

    if (next === computersTeam) {
      next = (next + 1) % teams.length;
    }
    setSelectionCount((prev) => prev + 1);
    console.log("User team selection count:", selectionCount + 1);
    setUserTeam(next);
  };

  const handleUserPrev = () => {
    let prev = (userTeam - 1 + teams.length) % teams.length;

    if (prev === computersTeam) {
      prev = (prev - 1 + teams.length) % teams.length;
    }

    setUserTeam(prev);
  };

  const handleTeamsSelection = () => {
    console.log("Selected User Team:", teams[userTeam]);
    console.log("Selected Computer Team:", teams[computersTeam]);
    // Here you can navigate to the next screen or start the game with the selected teams
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-bold">Loading Teams...</h2>
      </div>
    );
  }

  if (teams.length < 2) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-bold">At least 2 teams are required</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center">
      <div className="flex justify-center gap-10">
        {/* User Team */}
        <div className="flex flex-col items-center gap-4">
          <TeamCard
            title="Your Team"
            team={teams[userTeam]}
            isUserTeam={true}
          />

          <div className="flex gap-3">
            <button
              onClick={handleUserPrev}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              ◀ Previous
            </button>

            <button
              onClick={handleUserNext}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              Next ▶
            </button>
          </div>
        </div>

        {/* Computer Team */}
        <div className="flex flex-col items-center gap-4">
          <TeamCard
            title="Computer Team"
            team={teams[computersTeam]}
            isComputerTeam={true}
          />

          <div className="flex gap-3">
            <button
              onClick={() => {
                let prev = (computersTeam - 1 + teams.length) % teams.length;

                if (prev === userTeam) {
                  prev = (prev - 1 + teams.length) % teams.length;
                }

                setComputersTeam(prev);
              }}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              ◀ Previous
            </button>

            <button
              onClick={() => {
                let next = (computersTeam + 1) % teams.length;

                if (next === userTeam) {
                  next = (next + 1) % teams.length;
                }

                setComputersTeam(next);
              }}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handleTeamsSelection}
        className="
          mx-auto
          mt-10
          px-10
          py-4
          bg-green-600
          text-white
          rounded-xl
          shadow-xl
          hover:bg-green-700
          transition-all
        "
      >
        Select Teams
      </button>
    </div>
  );
};

export default TeamSelection;
