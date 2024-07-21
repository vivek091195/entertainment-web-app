const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: String, required: true },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
