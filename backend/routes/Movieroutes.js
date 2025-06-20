// routes/movieRoutes.js
const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// DELETE
router.delete("/:id", async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.send({ message: "Deleted" });
});

// PUT (Update)
router.put("/:id", async (req, res) => {
  const { title, poster } = req.body;
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    { title, poster },
    { new: true }
  );
  res.send(movie);
});

module.exports = router;
