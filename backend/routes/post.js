const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Create a post
router.post("/", async (req, res) => {
  try {
    const { title, description, creator, techStack } = req.body;
    const newPost = new Post({ title, description, creator, techStack });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("creator", "name email");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
/**
 * Update a post by ID
 */
router.put("/:id", async (req, res) => {
  try {
    const { title, description, techStack } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, description, techStack },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete request
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});