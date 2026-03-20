import { useRef } from "react";
import MovieCard from "./MovieCard";


function MovieList({ movies, onAddToWatchlist, onRemove,  message, selectedMovieId }) {
  const ref = useRef(null);

  return (
    <div className="carousel">
      <button 
         className="carousel-btn"
         onClick={() => ref.current && (ref.current.scrollLeft -= 300)}>◀</button>

    <div className="movie-list" ref={ref}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToWatchlist={onAddToWatchlist}
          onRemove={onRemove}
          message={selectedMovieId === movie.id ? message : ""}
        />
      ))}
    </div>
    
    <button 
        className="carousel-btn" 
        onClick={() => ref.current && (ref.current.scrollLeft += 300)}>▶</button>
    </div>
  );
}

export default MovieList;