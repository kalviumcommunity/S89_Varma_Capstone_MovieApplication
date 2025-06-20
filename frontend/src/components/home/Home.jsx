import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const movies = [
  {
    title: "Avatar",
    image: "https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    title:"Inception",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="home">
      <h1 className="maflix-title">Maflix 🎬</h1>
      <button className="login-button" onClick={() => navigate('/login')}>Login</button>
      <button className="signup-button" onClick={() => navigate('/signup')}>Sign Up</button>
      <p className="description">
        Discover the latest movies and TV shows, watch trailers, and get
        recommendations based on your taste.
      </p>
      <p className="subtitle">Welcome to the Movie Hub platform!</p>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div
            className="movie-card"
            key={index}
            onClick={() => setSelectedMovie(movie)}
            style={{ cursor: "pointer" }}
          >
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="trailer-modal">
          <h2>{selectedMovie.title} Trailer</h2>
          <iframe
            width="560"
            height="315"
            src={selectedMovie.trailer}
            title={`${selectedMovie.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button onClick={() => setSelectedMovie(null)} style={{marginTop: 16}}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Home;