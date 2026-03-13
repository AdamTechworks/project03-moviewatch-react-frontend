import MovieCard from "./MovieCard";

function MovieList({ movies, onAddToWatchlist }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
        />
      ))}
    </div>
  );
}

export default MovieList;