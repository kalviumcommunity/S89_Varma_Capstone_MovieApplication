import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, image }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard;