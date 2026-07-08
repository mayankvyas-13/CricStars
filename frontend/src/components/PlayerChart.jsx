import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const PlayerChart = ({ stats }) => {
  const data = {
    labels: stats.map((s) => s.match),
    datasets: [
      {
        label: "Runs Scored",
        data: stats.map((s) => s.runs),
        borderColor: "#FF5733",
        backgroundColor: "rgba(255, 87, 51, 0.5)",
        tension: 0.4,
        pointBackgroundColor: "#FF5733",
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Line data={data} />
    </div>
  );
};

export default PlayerChart;
