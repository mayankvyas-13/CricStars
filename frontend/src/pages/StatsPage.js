import React from "react";
import PlayerChart from "../components/PlayerChart";
import DismissalPieChart from "../components/DismissalPieChart";
import OpponentBarChart from "../components/OpponentBarChart";
import playerData from "../data/staticPlayerData";

const StatsPage = () => {
  const { matchWiseStats, dismissals, opponentStats } = playerData;

  return (
    <div className="p-6 max-w-6xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Player Performance Overview - ODI World Cup 2023
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlayerChart stats={matchWiseStats} />
        <DismissalPieChart dismissals={dismissals} />
      </div>

      <div className="mt-6">
        <OpponentBarChart opponentStats={opponentStats} />
      </div>
    </div>
  );
};

export default StatsPage;

