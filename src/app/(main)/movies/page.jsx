"use client";
import useFetch from "@/app/hooks/useFetch";
import MovieRow from "../moviedetails/movielist";


export default function Movies() {
  
  const endpoint1 = "now_playing";
  const endpoint2 = "popular";
  const endpoint3 = "top_rated";
  const endpoint4 = "upcoming";
   
  const category = "movie";
  
  const { data: nowPlayingMovies} = useFetch( category, endpoint1);
  const { data: popularMovies } = useFetch( category, endpoint2);
  const { data: topRatedMovies } = useFetch( category, endpoint3);
  const { data: upcomingMovies } = useFetch( category, endpoint4);

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
