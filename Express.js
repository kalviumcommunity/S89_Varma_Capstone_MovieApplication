const express = require('express');
const app = express();
const port = 3000;

const movies = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 2, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
    { id: 3, title: 'The Matrix', director: 'Lana & Lilly Wachowski', year: 1999 }
];

// Endpoint to get all movies
app.get('/api/movies', (req, res) => {
    res.json(movies);
});

// Endpoint to get a movie by ID
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});