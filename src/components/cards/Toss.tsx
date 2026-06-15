import { useEffect, useState } from "react";
import { useGame } from "../../context/GameContext";
const Toss = () => {
  const { dispatch, state } = useGame();
  const [showChoices, setShowChoices] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [coinResult, setCoinResult] = useState("");
  const [tossWinner, setTossWinner] = useState("");
  const [showDecision, setShowDecision] = useState(false);
  const [computerDecision, setComputerDecision] = useState("");
  const [battingTeam, setBattingTeam] = useState("");
  const [bowlingTeam, setBowlingTeam] = useState("");
  const [tossCompleted, setTossCompleted] = useState(false);
  const [decisionMade, setDecisionMade] = useState(false);
  useEffect(() => {
    console.log("Updated Context State");
    console.log(state);
  }, [state]);
  const handleTossClick = () => {
    setShowChoices(true);
  };
  const handleChoice = (choice: "HEADS" | "TAILS") => {
    setUserChoice(choice);
    const result = Math.random() < 0.5 ? "HEADS" : "TAILS";
    setCoinResult(result);
    setTossCompleted(true);
    if (choice === result) {
      setTossWinner("USER");
      setShowDecision(true);
    } else {
      setTossWinner("COMPUTER");
      const decision = Math.random() < 0.5 ? "BAT" : "BOWL";
      setComputerDecision(decision);
      if (decision === "BAT") {
        setBattingTeam("COMPUTER");
        setBowlingTeam("USER");
      } else {
        setBattingTeam("USER");
        setBowlingTeam("COMPUTER");
      }
      setDecisionMade(true);
      dispatch({
        type: "SET_TOSS_RESULT",
        payload: {
          tossWinner: "COMPUTER",
          battingTeam: decision === "BAT" ? "COMPUTER" : "USER",
          bowlingTeam: decision === "BAT" ? "USER" : "COMPUTER",
        },
      });
    }
  };
  const handleDecision = (decision: "BAT" | "BOWL") => {
    if (decision === "BAT") {
      setBattingTeam("USER");
      setBowlingTeam("COMPUTER");
    } else {
      setBattingTeam("COMPUTER");
      setBowlingTeam("USER");
    }
    setDecisionMade(true);
    dispatch({
      type: "SET_TOSS_RESULT",

      payload: {
        tossWinner: "USER",
        battingTeam: decision === "BAT" ? "USER" : "COMPUTER",
        bowlingTeam: decision === "BAT" ? "COMPUTER" : "USER",
      },
    });
  };
  console.log(userChoice);
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4 sm:p-6">
      <main className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        {!showChoices && (
          <div className="w-full">
            <button
              onClick={handleTossClick}
              className="w-full py-4 bg-yellow-500 text-white rounded-xl shadow-xl text-lg font-bold"
              aria-label="Start Toss"
            >
              Toss Time
            </button>
          </div>
        )}

        {showChoices && !tossCompleted && (
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <button
              onClick={() => handleChoice("HEADS")}
              className="w-full md:w-1/2 py-4 bg-blue-500 text-white rounded-xl text-lg"
              aria-pressed={userChoice === "HEADS"}
              aria-label="Choose Heads"
            >
              Heads
            </button>

            <button
              onClick={() => handleChoice("TAILS")}
              className="w-full md:w-1/2 py-4 bg-green-500 text-white rounded-xl text-lg"
              aria-pressed={userChoice === "TAILS"}
              aria-label="Choose Tails"
            >
              Tails
            </button>
          </div>
        )}

        {coinResult && !decisionMade && (
          <div className="mt-6 bg-slate-50 p-4 rounded-lg text-center">
            <h2 className="text-lg font-medium">You Chose: {userChoice}</h2>
            <p className="mt-2">
              Coin Result: <strong>{coinResult}</strong>
            </p>
            <p className="mt-2">
              Winner: <strong>{tossWinner}</strong>
            </p>
          </div>
        )}

        {tossWinner === "USER" && !decisionMade && (
          <div className=" mt-6 w-full max-w-sm flex flex-col gap-4 ">
            <button
              onClick={() => handleDecision("BAT")}
              className=" w-full py-4 bg-blue-600 text-white rounded-xl shadow-lg font-semibold"
            >
              Bat First
            </button>

            <button
              onClick={() => handleDecision("BOWL")}
              className=" w-full py-4 bg-green-600 text-white rounded-xl shadow-lg font-semibold"
            >
              Bowl First
            </button>
          </div>
        )}
        {tossWinner === "COMPUTER" && !showDecision && computerDecision && (
          <div className=" mt-4 text-center font-semibold">
            Computer chose to {computerDecision} first
          </div>
        )}
        {battingTeam && (
          <div className=" mt-6 w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
            <h3 className=" text-lg font-bold mb-2">Match Setup</h3>
            <p>Batting Team: {battingTeam}</p>
            <p>Bowling Team: {bowlingTeam}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Toss;
