const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // Optional Profile Info
  bio: String,
  avatar: String,
  location: String,

  skills: [String],
  github: String,
  linkedin: String,

  // Mentorship
  isMentor: { type: Boolean, default: false },
  interests: [String],
  
  // Messages and Posts
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
