// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Rankings = () => {
//   const [rankings, setRankings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [format, setFormat] = useState("odi");
//   const [type, setType] = useState("batsmen");

//   const fetchRankings = async (type, format) => {
//     const options = {
//       method: "GET",
//       url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/${type}`,
//       params: { formatType: format },
//       headers: {
//         "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
//         "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       return response.data.rankings || [];
//     } catch (error) {
//       console.error("Error fetching ICC rankings:", error);
//       throw error;
//     }
//   };

//   useEffect(() => {
//     const loadRankings = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchRankings(type, format);
//         setRankings(data);
//         setError(null);
//       } catch (err) {
//         setError("Failed to load rankings.");
//       }
//       setLoading(false);
//     };

//     loadRankings();
//   }, [format, type]);

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-white text-center mb-4">
//         ICC Rankings
//       </h2>

//       {/* Dropdowns */}
//       <div className="flex justify-center gap-4 mb-6">
//         <select
//           value={format}
//           onChange={(e) => setFormat(e.target.value)}
//           className="px-4 py-2 rounded bg-gray-800 text-white"
//         >
//           <option value="odi">ODI</option>
//           <option value="test">Test</option>
//           <option value="t20">T20</option>
//         </select>

//         <select
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="px-4 py-2 rounded bg-gray-800 text-white"
//         >
//           <option value="batsmen">Batting</option>
//           <option value="bowlers">Bowling</option>
//           <option value="allrounders">All-Rounders</option>
//           <option value="teams">Teams</option>
//         </select>
//       </div>

//       {/* Loading/Error */}
//       {loading && <p className="text-white text-center">Loading rankings...</p>}
//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {/* Rankings Table */}
//       {!loading && !error && (
//         <>
//           {type === "teams" ? (
//             <table className="min-w-full bg-black text-white border border-gray-700">
//               <thead>
//                 <tr className="border-b border-gray-700">
//                   <th className="py-2 px-4">Rank</th>
//                   <th className="py-2 px-4">Team</th>
//                   <th className="py-2 px-4">Rating</th>
//                   <th className="py-2 px-4">Points</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rankings.map((team, index) => (
//                   <tr key={index} className="border-b border-gray-700 text-center">
//                     <td className="py-2 px-4">{team.rank}</td>
//                     <td className="py-2 px-4">{team.team}</td>
//                     <td className="py-2 px-4">{team.rating}</td>
//                     <td className="py-2 px-4">{team.points}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <table className="min-w-full bg-black text-white border border-gray-700">
//               <thead>
//                 <tr className="border-b border-gray-700">
//                   <th className="py-2 px-4">Rank</th>
//                   <th className="py-2 px-4">Player</th>
//                   <th className="py-2 px-4">Country</th>
//                   <th className="py-2 px-4">Rating</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rankings.map((player, index) => (
//                   <tr key={index} className="border-b border-gray-700 text-center">
//                     <td className="py-2 px-4">{player.rank}</td>
//                     <td className="py-2 px-4">{player.name}</td>
//                     <td className="py-2 px-4">{player.country}</td>
//                     <td className="py-2 px-4">{player.rating}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Rankings;










// src/pages/Rankings.js
import React, { useState } from "react";
import { rankingsData } from "../data/rankingsData";
import TeamRankingsTable from "../components/rankings/TeamRankingsTable";
import PlayerRankingsTable from "../components/rankings/PlayerRankingsTable";
import "./Rankings.css";

const Rankings = () => {
  const [gender, setGender] = useState("men");
  const [format, setFormat] = useState("odi");
  const [category, setCategory] = useState("team");

  const data = rankingsData?.[gender]?.[format]?.[category] || [];

  return (
    <div className="rankings-container">
      <h2>ICC Rankings</h2>

      <div className="dropdowns">
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>

        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="odi">ODI</option>
          <option value="test">Test</option>
          <option value="t20">T20</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="team">Team</option>
          <option value="batsmen">Batsmen</option>
          <option value="bowlers">Bowlers</option>
          <option value="allrounders">All-Rounders</option>
        </select>
      </div>

      {category === "team" ? (
        <TeamRankingsTable data={data} />
      ) : (
        <PlayerRankingsTable data={data} />
      )}
    </div>
  );
};

export default Rankings;