import React, { useEffect, useState } from "react";
import axios from "axios";

const InfoBar = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);  // Added state to handle errors

  // Function to fetch live scores
  const fetchLiveScores = async () => {
    console.log("📡 Fetching live scores...");

    try {
      const response = await axios.get(
        `https://api.cricapi.com/v1/currentMatches?apikey=${process.env.REACT_APP_CRICKET_API_KEY}&offset=0`
      );
      const matches = response.data.data;

      if (!matches || matches.length === 0) {
        console.log("⚠️ No matches available right now.");
        setMatches([]);
        setError("No live or recent matches found.");
        return;
      }

      const displayMatches = matches
        .filter((match) => match.matchStarted) // Show only started or completed matches
        .map((match) => {
          const name = match.name;
          const status = match.status;
          const score = match.score.map((inning) => ({
            inning: inning.inning,
            runs: inning.r || 0, // Ensure there are default values
            wickets: inning.w || 0,
            overs: inning.o || 0,
          }));

          return {
            name,
            status,
            score,
          };
        });

      console.log("✅ Match Data:", displayMatches);
      setMatches(displayMatches.slice(0, 3)); // Only first 3 matches
      setError(null); // Clear errors if data is received
    } catch (error) {
      console.error("❌ Error fetching live scores:", error);
      setError("Failed to fetch live scores. Please try again.");
    }
  };

  // Manual refresh only
  useEffect(() => {
    fetchLiveScores(); // Fetch initial data on mount
  }, []);

  return (
    <div style={styles.container}>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : matches.length > 0 ? (
        matches.map((match, index) => (
          <div key={index} style={styles.matchBox}>
            <p style={styles.matchTitle}>{match.status || "Match Ongoing"}</p>
            <p>{match.name || "Unknown Match"}</p>
            {match.score && match.score.length > 0 ? (
              match.score.map((inning, idx) => (
                <p key={idx}>
                  {inning.inning}: {inning.runs}/{inning.wickets} ({inning.overs} overs)
                </p>
              ))
            ) : (
              <p>⚠️ Scores not available</p>
            )}
          </div>
        ))
      ) : (
        <p>Loading live scores...</p>
      )}
      {/* Button to refresh manually */}
      <button onClick={fetchLiveScores} style={styles.refreshButton}>
        Refresh Scores
      </button>
    </div>
  );
};

// Styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "white",
    borderBottom: "4px solid #444",
  },
  matchBox: {
    padding: "10px",
    border: "1px solid #555",
    width: "30%",
  },
  matchTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#bbb",
  },
  refreshButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#555",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default InfoBar;
