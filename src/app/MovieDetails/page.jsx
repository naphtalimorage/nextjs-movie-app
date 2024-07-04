"use client";
import useFetchMovies from "../fetching/useFetchmovies";

export default function MovieDetails() {
  const API_KEY = "9e405034103c33bc18daf866985f6671";
  const endpoint = "now_playing";

  const {data: movie} = useFetchMovies(endpoint, API_KEY);
  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <h2>{new Date(movie.release_date).getFullYear()}</h2>
        <p>{movie.overview}</p>
    </div>
  );
   
};
