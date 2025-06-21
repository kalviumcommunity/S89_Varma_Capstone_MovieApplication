// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  poster: String,
});

module.exports = mongoose.model("Movie", movieSchema);
