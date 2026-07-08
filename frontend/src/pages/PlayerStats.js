const mongoose = require('mongoose');

const playerStatsSchema = new mongoose.Schema({
  playerId: String,
  matchId: String,
  tournament: String,
  runs: Number,
  balls: Number,
  fours: Number,
  sixes: Number,
  strikeRate: Number,
  battingPosition: String,
  dismissalType: String,
  opponent: String,
  date: Date,
});

const PlayerStats = mongoose.model('PlayerStats', playerStatsSchema);
module.exports = PlayerStats;
