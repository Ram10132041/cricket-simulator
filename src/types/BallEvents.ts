export interface BallEvent {
  id: string;
  over: number;
  ball: number;

  runs: number;

  extra?: {
    type: "WIDE" | "NO_BALL" | "BYE" | "LEG_BYE";
    runs: number;
  };

  wicket?: {
    type: "BOWLED" | "CAUGHT" | "LBW" | "RUN_OUT" | "STUMPED";
    batterOut: string;
  };
}
