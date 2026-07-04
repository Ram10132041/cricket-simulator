import { useState } from "react";
import type { Player } from "../../types/Team";
import TeamPlayingXI from "./TeamPlayingXI";

interface PlayingXITabsProps {
  userTeamName: string;
  computerTeamName: string;
  userPlayers: Player[];
  computerPlayers: Player[];
}

const PlayingXITabs = ({
  userTeamName,
  computerTeamName,
  userPlayers,
  computerPlayers,
}: PlayingXITabsProps) => {
  // Which tab is currently active?
  const [activeTab, setActiveTab] = useState<"USER" | "COMPUTER">("USER");

  // Derived Data
  const currentTeamName =
    activeTab === "USER" ? userTeamName : computerTeamName;

  const currentPlayers = activeTab === "USER" ? userPlayers : computerPlayers;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Tab Header */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("USER")}
          className={`flex-1 py-3 text-center font-semibold transition-all duration-300 ${
            activeTab === "USER"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {userTeamName}
        </button>

        <button
          onClick={() => setActiveTab("COMPUTER")}
          className={`flex-1 py-3 text-center font-semibold transition-all duration-300 ${
            activeTab === "COMPUTER"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {computerTeamName}
        </button>
      </div>

      {/* Playing XI */}
      <div className="p-4">
        <TeamPlayingXI teamName={currentTeamName} players={currentPlayers} />
      </div>
    </div>
  );
};

export default PlayingXITabs;
