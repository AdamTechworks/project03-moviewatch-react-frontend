import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getWatchlist } from "../services/api";


function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    async function loadWatchlist() {
      try {
        const data = await getWatchlist();
        setWatchlist(data);
      } catch (err) {
        console.error("Failed to load watchlist", err);
      }
    }
  
    loadWatchlist();
  }, []);

  return (
    <main>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet.</p>
      ) : (
        <div className="movie-list">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
          )}
    </main>
  );
}

export default Watchlist;