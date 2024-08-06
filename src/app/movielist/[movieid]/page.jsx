"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const Details = () => {
  const apiKey = "9e405034103c33bc18daf866985f6671";
  const [movie, setMovie] = useState(null);
  const { movieid } = useParams();

  useEffect(() => {
    if (movieid) {
      const fetchMovieDetails = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieid}?api_key=${apiKey}`
          );
          const data = await response.json();
          setMovie(data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        }
      };
      fetchMovieDetails();
    }
  }, [movieid]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default Details;
