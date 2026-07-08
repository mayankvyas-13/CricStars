import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#00C49F", "#FFBB28"];

const DismissalPieChart = ({ dismissals }) => {
  const data = Object.entries(dismissals).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}> {/* Increased maxWidth */}
      <ResponsiveContainer width="100%" height={800}> {/* Increased height */}
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={300} /* Increased outerRadius */
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DismissalPieChart;
