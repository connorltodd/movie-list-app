import React from "react";
import Movie from "./Movie";

function MovieList() {
  const [movies, setMovies] = React.useState([]);
  const [areOnlyRecentMoviesDisplayed, recentMoviesHandler] = React.useState(
    false
  );

  React.useEffect(() => {
    fetchMovies();
  }, []);

  function fetchMovies() {
    fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.movies));
  }
  return (
    <div>
      <h1>Movie List</h1>
      <button
        onClick={() => recentMoviesHandler(!areOnlyRecentMoviesDisplayed)}
      >
        Toggle movies
      </button>
      {movies
        .filter((movie) =>
          areOnlyRecentMoviesDisplayed ? movie.year >= 2000 : movie
        )
        .map((item) => (
          <Movie {...item} key={item.id} />
        ))}
    </div>
  );
}

export default MovieList;
