import type { BallResult } from "../types/Ball";
import type { MatchState } from "../types/Match";

import { changeStrike } from "./changeStrike";
import { endOver } from "./endOver";
import { nextBatsman } from "./nextBatsman";
import { updateBalls } from "./updateBalls";
import { updateBatsman } from "./updateBatsman";
import { updateBowler } from "./updateBowler";
import { updateOvers } from "./updateOvers";
import { updateScore } from "./updateScore";
import { updateWickets } from "./updateWickets";

export function updateMatch(match: MatchState, result: BallResult): MatchState {
  // Update basic match information
  const balls = updateBalls(match.balls);
  const overs = updateOvers(match.overs, match.balls);
  const score = updateScore(match.score, result);
  const wickets = updateWickets(match.wickets, result);

  // Update player statistics
  const updatedStriker = updateBatsman(match.striker, result);
  const updatedBowler = updateBowler(match.currentBowler, result);

  let updatedMatch: MatchState = {
    ...match,
    score,
    wickets,
    balls,
    overs,
    lastBall: result,
    striker: updatedStriker,
    nonStriker: match.nonStriker,
    currentBowler: updatedBowler,
  };

  // Handle wicket
  if (result === "W") {
    updatedMatch = nextBatsman(updatedMatch, true);
  }
  // Handle strike rotation
  else {
    const strike = changeStrike(
      updatedMatch.striker,
      updatedMatch.nonStriker,
      result,
    );

    updatedMatch = {
      ...updatedMatch,
      striker: strike.striker,
      nonStriker: strike.nonStriker,
    };
  }

  // Handle end of over
  if (balls === 0) {
    updatedMatch = endOver(updatedMatch);
  }

  return updatedMatch;
}
