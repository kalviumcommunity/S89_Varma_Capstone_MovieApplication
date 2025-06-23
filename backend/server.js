const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express(); // ✅ Only ONE time!
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/Reviewroutes");
app.use("/api/reviews", reviewRoutes);


app.use(cors());
app.use(express.json());
app.use("/api", userRoutes); // ✅ Use the userRoutes for all routes starting with /api
app.use("/api/reviews", reviewRoutes);
// DB Connection
mongoose.connect("mongodb+srv://satyaemailid2007:LQOhQq7vXDnLyGtX@cluster0.salid94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("Connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});



