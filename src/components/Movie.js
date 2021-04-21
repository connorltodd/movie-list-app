import React from "react";
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.year}</p>
      <p>{props.director}</p>
      <Link to={`/movies/${props.id}`}>View Details</Link>
    </div>
  );
}

export default Movie;
