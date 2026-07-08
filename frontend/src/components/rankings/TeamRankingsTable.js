// src/components/rankings/TeamRankingsTable.js
import React from "react";

const TeamRankingsTable = ({ data }) => (
  <table className="rankings-table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Team</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.rank}>
          <td>{item.rank}</td>
          <td>{item.name}</td>
          <td>{item.rating}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TeamRankingsTable;