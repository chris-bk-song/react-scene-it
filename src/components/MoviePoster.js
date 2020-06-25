import React from 'react';

function MoviePoster(props) {
  return (
    <div className="Container">
      <img src={props.movie.Poster} />
      <h2>{props.movie.Title}</h2>
      <h2>{props.movie.Year}</h2>
      <h2>{props.movie.imdbID}</h2>
    </div>
  )
}

export default MoviePoster