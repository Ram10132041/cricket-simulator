import type { MatchPlayer } from "../types/Match";

export function nextBatsman(battingOrder:number[],nextBatsmanIndex:number){
  if(nextBatsmanIndex>=battingOrder.length){
    return { batsman:null,nextBatsmanIndex };
  }
  return {
    batsman:{
      playerId:battingOrder[nextBatsmanIndex],
      runs:0,balls:0,fours:0,sixes:0,isOut:false
    } as MatchPlayer,
    nextBatsmanIndex:nextBatsmanIndex+1
  };
}
