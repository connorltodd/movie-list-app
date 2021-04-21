import React from "react";

function MovieDetails(props) {
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    const movieId = Number(props.match.params.id);
    fetchMoviesById(movieId);
  }, []);

  function fetchMoviesById(movieId) {
    fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const foundMovie = data.movies.find((item) => item.id === movieId);
        setMovie(foundMovie);
      });
  }

  return (
    <div>
      <h1>Movie Details</h1>
      <p>{movie.title}</p>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
    </div>
  );
}

export default MovieDetails;
