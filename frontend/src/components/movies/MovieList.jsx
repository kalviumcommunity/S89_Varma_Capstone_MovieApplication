// components/MovieList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await axios.get("http://localhost:5000/api/movies");
    setMovies(res.data);
  };

  const deleteMovie = async (id) => {
    await axios.delete(`http://localhost:5000/api/movies/${id}`);
    fetchMovies();
  };

  const startEdit = (movie) => {
    setEditingMovie(movie._id);
    setTitle(movie.title);
    setPoster(movie.poster);
  };

  const updateMovie = async () => {
    await axios.put(`http://localhost:5000/api/movies/${editingMovie}`, {
      title,
      poster,
    });
    setEditingMovie(null);
    setTitle("");
    setPoster("");
    fetchMovies();
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <img src={movie.poster} width="100" alt="poster" />
            <p>{movie.title}</p>
            <button onClick={() => deleteMovie(movie._id)}>Delete</button>
            <button onClick={() => startEdit(movie)}>Edit</button>
          </li>
        ))}
      </ul>

      {editingMovie && (
        <div>
          <h3>Update Movie</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            placeholder="Poster URL"
          />
          <button onClick={updateMovie}>Update</button>
        </div>
      )}
    </div>
  );
}

export default MovieList;
