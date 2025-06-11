const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth'); 

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/movieapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use("/", authRoutes);

// Example route
app.get('/', (req, res) => {
    res.send('Movie Application Backend is running');
});

// TODO: Add your routes here
// Example: app.use('/api/movies', require('./routes/movies'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});