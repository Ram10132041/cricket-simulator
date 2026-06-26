import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import { useTheme } from "../../context/ThemeContext";
import { getTeams } from "../../services/teamService";
import type { Team } from "../../types/Team";
const Toss = () => {
  const { dispatch, state } = useGame();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [teams, setTeams] = useState<Team[]>([]);
  const [showChoices, setShowChoices] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [coinResult, setCoinResult] = useState("");
  const [tossWinner, setTossWinner] = useState("");
  const [showDecision, setShowDecision] = useState(false);
  const [computerDecision, setComputerDecision] = useState("");
  const [battingTeam, setBattingTeam] = useState("");
  const [, setBowlingTeam] = useState("");
  const [tossCompleted, setTossCompleted] = useState(false);
  const [decisionMade, setDecisionMade] = useState(false);
  useEffect(() => {
    console.log("Updated Context State");
    console.log(state);
  }, [state]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getTeams();
        setTeams(data);
      } catch (err) {
        console.error("Failed to load teams in Toss:", err);
      }
    };

    load();
  }, []);

  const handleTossClick = () => {
    setShowChoices(true);
  };
  const handleChoice = (choice: "HEADS" | "TAILS") => {
    setUserChoice(choice);
    const result = Math.random() < 0.95 ? "HEADS" : "TAILS";
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
      if (state.userTeamId === null || state.computerTeamId === null) {
        return;
      }
      dispatch({
        type: "SET_TOSS_RESULT",
        payload: {
          tossWinner: "COMPUTER",
          battingTeamId:
            decision === "BAT" ? state.computerTeamId : state.userTeamId,
          bowlingTeamId:
            decision === "BAT" ? state.userTeamId : state.computerTeamId,
        },
      });
    }
  };
  const handleDecision = (decision: "BAT" | "BOWL") => {
    console.log("USER TEAM ID:", state.userTeamId);
    if (decision === "BAT") {
      setBattingTeam("USER");
      setBowlingTeam("COMPUTER");
    } else {
      setBattingTeam("COMPUTER");
      setBowlingTeam("USER");
    }
    setDecisionMade(true);
    if (state.userTeamId === null || state.computerTeamId === null) {
      return;
    }
    dispatch({
      type: "SET_TOSS_RESULT",
      payload: {
        tossWinner: "USER",
        battingTeamId:
          decision === "BAT" ? state.userTeamId : state.computerTeamId,
        bowlingTeamId:
          decision === "BAT" ? state.computerTeamId : state.userTeamId,
      },
    });
  };
  const battingTeamObj = teams.find((team) => team.id === state.battingTeamId);
  const bowlingTeamObj = teams.find((team) => team.id === state.bowlingTeamId);

  const outerClass =
    theme === "light"
      ? "min-h-screen flex items-center justify-center bg-slate-100 p-4 sm:p-6"
      : "min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-black p-4 sm:p-6 text-slate-100";

  const mainClass =
    theme === "light"
      ? "w-full max-w-md bg-white rounded-2xl shadow-xl p-6 text-slate-900"
      : "w-full max-w-md bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-700 text-slate-100";

  const panelClass =
    theme === "light"
      ? "mt-6 bg-slate-50 p-4 rounded-lg text-center"
      : "mt-6 bg-slate-900/60 p-4 rounded-lg text-center";

  // const buttonBase = "w-full py-4 rounded-xl text-lg font-bold";

  const headsClass =
    theme === "light"
      ? "w-full md:w-1/2 py-4 bg-blue-500 text-white rounded-xl text-lg"
      : "w-full md:w-1/2 py-4 bg-blue-600 text-white rounded-xl text-lg";

  const tailsClass =
    theme === "light"
      ? "w-full md:w-1/2 py-4 bg-green-500 text-white rounded-xl text-lg"
      : "w-full md:w-1/2 py-4 bg-green-600 text-white rounded-xl text-lg";

  const primaryBtnClass =
    theme === "light"
      ? "w-full py-4 bg-yellow-500 text-white rounded-xl shadow-xl text-lg font-bold"
      : "w-full py-4 bg-yellow-500 text-slate-900 rounded-xl shadow-xl text-lg font-bold";

  const previewBtnClass =
    theme === "light"
      ? "mt-4 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-700"
      : "mt-4 w-full rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-400";

  return (
    <div className={outerClass}>
      <main className={mainClass}>
        {!showChoices && (
          <div className="w-full">
            <button
              onClick={handleTossClick}
              className={primaryBtnClass}
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
              className={headsClass}
              aria-pressed={userChoice === "HEADS"}
              aria-label="Choose Heads"
            >
              Heads
            </button>

            <button
              onClick={() => handleChoice("TAILS")}
              className={tailsClass}
              aria-pressed={userChoice === "TAILS"}
              aria-label="Choose Tails"
            >
              Tails
            </button>
          </div>
        )}

        {coinResult && !decisionMade && (
          <div className={panelClass}>
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
              className={
                theme === "light"
                  ? " w-full py-4 bg-blue-600 text-white rounded-xl shadow-lg font-semibold"
                  : " w-full py-4 bg-blue-600 text-white rounded-xl shadow-lg font-semibold"
              }
            >
              Bat First
            </button>

            <button
              onClick={() => handleDecision("BOWL")}
              className={
                theme === "light"
                  ? " w-full py-4 bg-green-600 text-white rounded-xl shadow-lg font-semibold"
                  : " w-full py-4 bg-green-600 text-white rounded-xl shadow-lg font-semibold"
              }
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
          <div
            className={
              theme === "light"
                ? " mt-6 w-full max-w-sm bg-white rounded-2xl shadow-xl p-6"
                : " mt-6 w-full max-w-sm bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-700 text-slate-100"
            }
          >
            <h3 className=" text-lg font-bold mb-2">Match Setup</h3>
            <p>Batting Team: {battingTeamObj?.name}</p>
            <p>Bowling Team: {bowlingTeamObj?.name}</p>
            <button
              type="button"
              className={previewBtnClass}
              onClick={() => navigate("/match-preview")}
            >
              Playing XI Preview
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Toss;
