import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { getMovies, addToWatchlist, getWatchlist } from "../services/api";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setError("Could not load movies.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    

    loadMovies();
  }, []);


    async function handleAddToWatchlist(movie) {
    try {
      const watchlist = await getWatchlist();

      const alreadyAdded = watchlist.some(
        (item) => item.title === movie.title
      );

      setSelectedMovieId(movie.id);

      if (alreadyAdded) {
        setMessage(`${movie.title} is already in your watchlist.`);
        return;
      }

      await addToWatchlist(movie);
      setMessage(`${movie.title} added to watchlist`);
    } catch (err) {
      console.error(err);
      setSelectedMovieId(movie.id);
      setMessage("Could not add movie to watchlist.");
    }
  }

  return (
    <main>
      <h1>Browse Movies</h1>
      <p>Explore movies and add them to your watchlist.</p>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}

      
     {!loading && !error && (
        <MovieList
          movies={movies}
          onAddToWatchlist={handleAddToWatchlist}
          message={message}
          selectedMovieId={selectedMovieId}
        />
      )}
    </main>
  );
}

export default Movies;