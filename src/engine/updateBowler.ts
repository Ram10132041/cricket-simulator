import type { BallResult } from "../types/Ball";
import type { MatchBowler } from "../types/Match";

export function updateBowler(bowler: MatchBowler,result: BallResult): MatchBowler {
  const updated={...bowler,balls: bowler.balls+1};
  if(result==="W"){ return {...updated,wickets: bowler.wickets+1}; }
  if(typeof result==="number"){ return {...updated,runs: bowler.runs+result}; }
  return updated;
}
