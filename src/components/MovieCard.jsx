function MovieCard({ movie, onAddToWatchlist, onRemove }) {
  return (
    <div className="card">
        <h2>{movie.title}</h2>

        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Year:</strong> {movie.year}</p>

        <p>{movie.review}</p>

        <p><strong>Rating:</strong> {movie.rating}/10</p>

        {onAddToWatchlist && (
        <button onClick={() => onAddToWatchlist(movie)}>
            Add to Watchlist
        </button>
        )}
        
        {onRemove && (
            <button onClick={() => onRemove(movie.id)}>
            Remove Movie
            </button>
        )}
    </div>
  );
}

export default MovieCard;