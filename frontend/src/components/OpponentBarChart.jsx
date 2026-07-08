import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const OpponentBarChart = ({ opponentStats }) => {
  const data = {
    labels: Object.keys(opponentStats),
    datasets: [
      {
        label: "Runs vs Opponent",
        data: Object.values(opponentStats),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Bar data={data} />
    </div>
  );
};

export default OpponentBarChart;
