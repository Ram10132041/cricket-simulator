import { useState } from "react";
import { playBall } from "../engine/playBall";
import { updateBalls } from "../engine/updateBalls";
import { updateBatsman } from "../engine/updateBatsman";
// TODO: Later integrate changeStrike, updateBowler, nextBatsman, endOver here.
import { updateOvers } from "../engine/updateOvers";
import { updateScore } from "../engine/updateScore";
import { updateWickets } from "../engine/updateWickets";
import BatsmenCard from "./Match/BatsmenCard";
import BowlerCard from "./Match/BowlerCard";
import LastBallCard from "./Match/LastBallCard";
import MatchControls from "./Match/MatchControls";
import ScoreBoard from "./Match/ScoreBoard";

const initialMatchState = {
  battingTeam: "India",

  score: 0,
  wickets: 0,

  overs: 0,
  balls: 0,

  runRate: 0,

  striker: {
    playerId: 1,
    name: "Rohit Sharma",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    isOut: false,
  },

  nonStriker: {
    playerId: 2,
    name: "Shubman Gill",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    isOut: false,
  },

  bowler: {
    playerId: 1,
    name: "Mitchell Starc",
    overs: 0,
    balls: 0,
    runs: 0,
    wickets: 0,
  },

  lastBall: "-",
};

const Match = () => {
  const [lastBall, setLastBall] = useState("-");
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);
  const [striker, setStriker] = useState(initialMatchState.striker);

  const handleBowl = () => {
    const result = playBall();
    setLastBall(String(result));
    setScore((previousScore) => updateScore(previousScore, result));
    setWicket((previousWicket) => updateWickets(previousWicket, result));
    setBalls((previousBall) => updateBalls(previousBall));
    setOvers((previousOver) => updateOvers(previousOver, balls));
    setStriker((previousStriker) => updateBatsman(previousStriker, result));
  };
  return (
    <div>
      <ScoreBoard
        battingTeam={initialMatchState.battingTeam}
        score={score}
        wickets={wicket}
        overs={overs}
        balls={balls}
        runRate={initialMatchState.runRate}
      />
      <div className="pt-4"></div>
      <BatsmenCard
        strikerName={striker.name}
        strikerRuns={striker.runs}
        strikerBalls={striker.balls}
        nonStrikerName={initialMatchState.nonStriker.name}
        nonStrikerRuns={initialMatchState.nonStriker.runs}
        nonStrikerBalls={initialMatchState.nonStriker.balls}
      />
      <div className="pt-4"></div>
      <LastBallCard result={lastBall} />
      <div className="pt-4"></div>
      <BowlerCard
        name={initialMatchState.bowler.name}
        overs={overs}
        balls={balls}
        runs={initialMatchState.bowler.runs}
        wickets={initialMatchState.bowler.wickets}
      />
      <div className="pt-4"></div>
      <MatchControls onBowl={handleBowl} />
    </div>
  );
};

export default Match;
