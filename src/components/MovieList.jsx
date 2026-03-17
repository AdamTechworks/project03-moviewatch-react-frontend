import MovieCard from "./MovieCard";

function MovieList({ movies, onAddToWatchlist, message, selectedMovieId }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
          message={selectedMovieId === movie.id ? message : ""}
        />
      ))}
    </div>
  );
}

export default MovieList;