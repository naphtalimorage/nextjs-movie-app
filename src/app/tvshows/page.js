"use client";
import { CarouselCustomArrows } from "../components/carousel/page";
import TvshowsRow from "../tvshowlist/tvshowlist";
import useFetchTvshows from "../fetchingseries/useFetchTvshows";

export default function Tvshows() {
  const API_KEY = "9e405034103c33bc18daf866985f6671";

  const endpoint1 = "airing_today";
  const endpoint2 = "on_the_air";
  const endpoint3 = "popular";
  const endpoint4 = "top_rated";

  const { data: airingtodays } = useFetchTvshows(endpoint1, API_KEY);
  const { data: ontheAirTvShows } = useFetchTvshows(endpoint2, API_KEY);
  const { data: popularTvShows } = useFetchTvshows(endpoint3, API_KEY);
  const { data: topratedTvShows } = useFetchTvshows(endpoint4, API_KEY);

  const airingTodayCategory = "Airing Today";
  const ontheAirCategory = "On The Air";
  const popularCategory = "Popular";
  const topratedCategory = "Top Rated";

  return (
    <div>
      <CarouselCustomArrows/>
      <div className=" ml-5 mt-4 px-5">
        <TvshowsRow category={airingTodayCategory} tvshows={airingtodays} />
      </div>
      <div className=" ml-5 mt-4 px-5">
        <TvshowsRow category={ontheAirCategory} tvshows={ontheAirTvShows} />
      </div>
      <div className=" ml-5 mt-4 px-5">
        <TvshowsRow category={popularCategory} tvshows={popularTvShows} />
      </div>
      <div className=" ml-5 mt-4 px-5">
        <TvshowsRow category={topratedCategory} tvshows={topratedTvShows} />
      </div>
    </div>
  );
}
