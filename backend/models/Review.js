const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  title: String,
  content: String,
  rating: Number,
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"  // 🔗 Relationship here
  }
});

module.exports = mongoose.model("Review", reviewSchema);
