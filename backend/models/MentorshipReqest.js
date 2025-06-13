const mongoose = require("mongoose");

const mentorshipRequestSchema = new mongoose.Schema({
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("MentorshipRequest", mentorshipRequestSchema);
