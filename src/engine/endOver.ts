import type { MatchPlayer } from "../types/Match";

export function endOver(striker:MatchPlayer,nonStriker:MatchPlayer){
  return { striker:nonStriker, nonStriker:striker };
}
