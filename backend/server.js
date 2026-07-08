// Load environment variables at the top
require("dotenv").config(); 

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express(); // ✅ Define app before using CORS
app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend access

const PORT = process.env.PORT || 5000;
const CRIC_API_URL = "https://api.cricapi.com/v1/currentMatches";
const API_KEY = process.env.CRICKET_API_KEY; // ✅ Now using .env key

// Check if API key is available in the .env file
if (!API_KEY) {
    console.error("❌ CRICKET_API_KEY is missing in .env file!");
    process.exit(1); // Stop the server if API key is missing
}

// Route to fetch live match data
app.get("/api/live-scores", async (req, res) => {
    try {
        const response = await axios.get(`${CRIC_API_URL}?apikey=${API_KEY}`);
        res.json(response.data);  // Send data as JSON response to the frontend
    } catch (error) {
        console.error("❌ Error fetching match data:", error.message);
        res.status(500).json({ error: "Failed to fetch match data" });  // Send error if API request fails
    }
});

// Start the server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
