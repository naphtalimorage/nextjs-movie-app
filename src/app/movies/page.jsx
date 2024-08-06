"use client";
import useFetchMovies from "../fetchingmovies/useFetchmovies";
import MovieRow from "../movielist/movielist";
import { CarouselCustomArrows } from "../components/carousel/page";


export default function Movies() {
  const API_KEY = "9e405034103c33bc18daf866985f6671";

  const endpoint1 = "now_playing";
  const endpoint2 = "popular";
  const endpoint3 = "top_rated";
  const endpoint4 = "upcoming";
   
  
  const { data: nowPlayingMovies} = useFetchMovies(endpoint1, API_KEY);
  const { data: popularMovies } = useFetchMovies(endpoint2, API_KEY);
  const { data: topRatedMovies } = useFetchMovies(endpoint3, API_KEY);
  const { data: upcomingMovies } = useFetchMovies(endpoint4, API_KEY);

  const nowPlayingCategory = "Now Playing";
  const PopularCategory = "Popular";
  const TopRatedCategory = "Top Rated";
  const UpcomingCategory = "Upcoming";
  return (
    <div>
      <CarouselCustomArrows/>
      <div className=" ml-5 mt-4 px-5">
        <MovieRow category={nowPlayingCategory} movies={nowPlayingMovies} />
      </div>
      <div className=" ml-5 mt-4 px-5">
        <MovieRow category={PopularCategory} movies={popularMovies} />
      </div>
      <div className=" ml-5 mt-4 px-5">
        <MovieRow category={TopRatedCategory} movies={topRatedMovies} />
      </div>
      <div className=" ml-5 mt-4 px-5">
        <MovieRow category={UpcomingCategory} movies={upcomingMovies} />
      </div>
    </div>
  );
}
