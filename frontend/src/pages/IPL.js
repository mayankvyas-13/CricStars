import React from "react";
import { Link } from "react-router-dom";

const IPL = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">IPL 2025 Hub</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Link to="/IPL/schedule" className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-lg text-center transition">
          <h2 className="text-2xl font-semibold mb-2">Match Schedule</h2>
          <p className="text-sm text-gray-300">View upcoming IPL matches and results.</p>
        </Link>

        <Link to="/IPL/table" className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-lg text-center transition">
          <h2 className="text-2xl font-semibold mb-2">Points Table</h2>
          <p className="text-sm text-gray-300">Check current standings of IPL teams.</p>
        </Link>

        <Link to="/IPL/stats" className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-lg text-center transition">
          <h2 className="text-2xl font-semibold mb-2">Top Players</h2>
          <p className="text-sm text-gray-300">Explore top run scorers and wicket takers.</p>
        </Link>

        <Link to="/IPL/squads" className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-lg text-center transition">
          <h2 className="text-2xl font-semibold mb-2">Team Squads</h2>
          <p className="text-sm text-gray-300">Know the players in each IPL team.</p>
        </Link>
      </div>
    </div>
  );
};

export default IPL;
