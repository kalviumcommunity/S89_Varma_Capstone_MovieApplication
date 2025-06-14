import React from "react";
import "./Home.css";

const movies = [
  {
    title: "Avatar",
    image: "https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1 className="maflix-title">Maflix 🎬</h1>
      <p className="subtitle">Welcome to the Movie Hub platform!</p>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
