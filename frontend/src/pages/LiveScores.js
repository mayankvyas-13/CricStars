import React, { useEffect, useState } from "react";
import axios from "axios";

const LiveScores = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);  // 🔹 State to handle errors

  useEffect(() => {
    const fetchLiveScores = async () => {
      console.log("📡 Fetching live scores...");

      try {
        const response = await axios.get("http://localhost:5000/api/live-scores");

        console.log("✅ Full API Response:", response.data);

        if (response.data && response.data.data) {
          setMatches((prevMatches) => {
            console.log("🔄 Previous State:", prevMatches);
            console.log("✅ New State:", response.data.data);
            return response.data.data;
          });
          setError(null);
        } else {
          console.warn("⚠️ Unexpected API response structure:", response.data);
          setMatches([]);
          setError("Unexpected API response structure.");
        }
      } catch (error) {
        console.error("❌ Error fetching live scores:", error);
        setError("Failed to fetch live scores. Please try again.");
      }
    };

    fetchLiveScores();
    const interval = setInterval(fetchLiveScores, 60000); // Refresh every 60s

    return () => clearInterval(interval);
  }, []);

  // ✅ Logs when matches state actually updates
  useEffect(() => {
    console.log("🔄 Matches Updated:", matches);
  }, [matches]);

  return (
    <div>
      <h2>Live Scores</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : matches.length > 0 ? (
        matches.map((match, index) => (
          <div key={index} style={styles.matchBox}>
            <p style={styles.matchTitle}>{match.status || "Match Ongoing"}</p>
            <p>{match.name}</p>
            {match.score && match.score.length > 0 ? (
              match.score.map((inning, idx) => (
                <p key={idx}>
                  {inning.inning}: {inning.runs ?? "0"}/{inning.wickets ?? "0"} ({inning.overs ?? "0"} overs)
                </p>
              ))
            ) : (
              <p>⚠️ Scores not available</p>
            )}
            <p style={styles.matchResult}>{match.result || "Live"}</p>
          </div>
        ))
      ) : (
        <p>Loading live scores...</p>
      )}
    </div>
  );
};

// 🔹 Styling
const styles = {
  matchBox: {
    padding: "10px",
    border: "1px solid #555",
    marginBottom: "10px",
  },
  matchTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#bbb",
  },
  matchResult: {
    fontWeight: "bold",
    color: "#ffcc00",
  },
};

export default LiveScores;
