import BatsmenCard from "./Match/BatsmenCard";
import BowlerCard from "./Match/BowlerCard";
import LastBallCard from "./Match/LastBallCard";
import MatchControls from "./Match/MatchControls";
import ScoreBoard from "./Match/ScoreBoard";

const Match = () => {
  return (
    <div>
      <ScoreBoard
        battingTeam="India"
        score={0}
        wickets={0}
        overs={0}
        balls={0}
        runRate={0}
      />
      <div className="pt-4"></div>
      <BatsmenCard
        strikerName="Rohit Sharma"
        strikerRuns={0}
        strikerBalls={0}
        nonStrikerName="Gill"
        nonStrikerRuns={0}
        nonStrikerBalls={0}
      />
      <div className="pt-4"></div>
      <LastBallCard result="6" />
      <div className="pt-4"></div>
      <BowlerCard name="Starc" overs={4} balls={3} runs={26} wickets={3} />
      <div className="pt-4"></div>
      <MatchControls onBowl={() => console.log("Ball Bowled")} />
    </div>
  );
};

export default Match;
