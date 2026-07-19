export interface MatchPlayer {
  playerId: number;
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  isOut: boolean;
}

export interface MatchBowler {
  playerId: number;
  overs: number;
  balls: number;
  runs: number;
  wickets: number;
  name: string;
}

import type { BallResult } from "./Ball";

export interface MatchState {
  innings: 1 | 2;
  battingTeamId: number;
  bowlingTeamId: number;
  score: number;
  wickets: number;
  overs: number;
  balls: number;
  battingOrder: MatchPlayer[];
  striker: MatchPlayer;
  nonStriker: MatchPlayer;
  nextBatsmanIndex: number;
  currentBowler: MatchBowler;
  lastBall: BallResult | string;
  overCompleted: boolean;
}

export interface StrikePair {
  striker: MatchPlayer;
  nonStriker: MatchPlayer;
}
