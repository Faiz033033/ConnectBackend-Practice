import React from 'react';
import DeleteMovie from './DelMovie';
import Movie from './Movie';
import './MoviesList.module.css';

function MoviesList(props) {
  return (
    <ul>
      {props.movies.map((movie) => (
        <li key={movie.id}>
          <Movie
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
          <DeleteMovie onDeleteMovie={props.onDeleteMovie} movieId={movie.id} />
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
