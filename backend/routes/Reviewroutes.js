const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// POST: create a review (linking a user)
router.post("/", async (req, res) => {
  try {
    const review = new Review(req.body); // contains reviewer ID
    await review.save();
    res.status(201).send(review);
  } catch (err) {
    res.status(500).send({ error: "Failed to create review" });
  }
});

// GET: get all reviews with user data populated
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().populate("reviewer"); // 🔥 Populating user info
    res.send(reviews);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch reviews" });
  }
});

module.exports = router;
