import { useEffect, useState } from "react";
import { useGame } from "../context/GameContext";
import { calculateRunRate } from "../engine/calculateRunRate";
import { playBall } from "../engine/playBall";

import BatsmenCard from "./Match/BatsmenCard";
import BowlerCard from "./Match/BowlerCard";
import LastBallCard from "./Match/LastBallCard";
import MatchControls from "./Match/MatchControls";
import ScoreBoard from "./Match/ScoreBoard";

const Match = () => {
  const { state, dispatch } = useGame();

  const [showBowlerSelection, setShowBowlerSelection] = useState(false);

  const match = state.match;

  useEffect(() => {
    if (!match?.overCompleted) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowBowlerSelection(true);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [match?.overCompleted]);

  if (!match) {
    return <div>Match not initialized.</div>;
  }

  const runRate = calculateRunRate(match.score, match.overs, match.balls);

  // Temporary until GameState stores complete Team objects
  const battingTeamName =
    match.battingTeamId === state.userTeamId ? "Your Team" : "Computer Team";

  const handleBowl = () => {
    // Prevent bowling until a new bowler is selected
    if (showBowlerSelection) return;

    const result = playBall();

    dispatch({
      type: "UPDATE_MATCH",
      payload: result,
    });
  };

  return (
    <div className="p-4">
      <ScoreBoard
        battingTeam={battingTeamName}
        score={match.score}
        wickets={match.wickets}
        overs={match.overs}
        balls={match.balls}
        runRate={runRate}
      />

      <div className="pt-4" />

      <BatsmenCard
        strikerName={match.striker.name}
        strikerRuns={match.striker.runs}
        strikerBalls={match.striker.balls}
        nonStrikerName={match.nonStriker.name}
        nonStrikerRuns={match.nonStriker.runs}
        nonStrikerBalls={match.nonStriker.balls}
      />

      <div className="pt-4" />

      <LastBallCard result={match.lastBall} />

      <div className="pt-4" />

      <BowlerCard
        name={match.currentBowler.name}
        overs={match.currentBowler.overs}
        balls={match.currentBowler.balls}
        runs={match.currentBowler.runs}
        wickets={match.currentBowler.wickets}
      />

      <div className="pt-4" />

      <MatchControls
        onBowl={handleBowl}
        // disabled={showBowlerSelection}
      />

      {showBowlerSelection && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Select Next Bowler</h2>

            <p className="text-gray-600">
              Bowler selection will be implemented next.
            </p>

            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => {
                setShowBowlerSelection(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Match;
