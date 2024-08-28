"use client";
import useFetch from "@/app/hooks/useFetch";
import MovieRow from "../moviedetails/movielist";


export default function Movies() {
  const API_KEY = "9e405034103c33bc18daf866985f6671";
  
  const endpoint1 = "now_playing";
  const endpoint2 = "popular";
  const endpoint3 = "top_rated";
  const endpoint4 = "upcoming";
   
  const category = "movie";
  
  const { data: nowPlayingMovies} = useFetch( category, endpoint1, API_KEY);
  const { data: popularMovies } = useFetch( category, endpoint2,API_KEY);
  const { data: topRatedMovies } = useFetch( category, endpoint3, API_KEY);
  const { data: upcomingMovies } = useFetch( category, endpoint4, API_KEY);

  const nowPlayingCategory = "Now Playing";
  const PopularCategory = "Popular";
  const TopRatedCategory = "Top Rated";
  const UpcomingCategory = "Upcoming";
  return (
    <div>
      <div className="px-8 py-5 ">
        <MovieRow category={nowPlayingCategory} movies={nowPlayingMovies} />
      </div>
      <div className="px-8 py-5">
        <MovieRow category={PopularCategory} movies={popularMovies} />
      </div>
      <div className="px-8 py-5">
        <MovieRow category={TopRatedCategory} movies={topRatedMovies} />
      </div>
      <div className="px-8 py-5">
        <MovieRow category={UpcomingCategory} movies={upcomingMovies} />
      </div>
    </div>
  );
}
