import React from 'react';
import './DelMovie.module.css'

function DeleteMovie(props) {
  function deleteHandler() {
    props.onDeleteMovie(props.movieId);
  }

  return (
    <button onClick={deleteHandler} className="delete-button">
      Delete
    </button>
  );
}

export default DeleteMovie;
