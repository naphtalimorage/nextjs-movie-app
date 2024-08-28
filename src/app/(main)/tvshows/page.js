"use client";
import TvshowsRow from "../tvshowlist/tvshowlist";
import useFetch from "@/app/hooks/useFetch";

export default function Tvshows() {
  const API_KEY = "9e405034103c33bc18daf866985f6671";

  const endpoint1 = "airing_today";
  const endpoint2 = "on_the_air";
  const endpoint3 = "popular";
  const endpoint4 = "top_rated";

  const category = "tv";

  const { data: airingtodays } = useFetch(category,endpoint1,  API_KEY);
  const { data: ontheAirTvShows } = useFetch(category,endpoint2,API_KEY);
  const { data: popularTvShows } = useFetch( category, endpoint3, API_KEY);
  const { data: topratedTvShows } = useFetch( category, endpoint4, API_KEY);

  const airingTodayCategory = "Airing Today";
  const ontheAirCategory = "On The Air";
  const popularCategory = "Popular";
  const topratedCategory = "Top Rated";

  return (
    <div>
      <div className="px-8 py-5">
        <TvshowsRow category={airingTodayCategory} tvshows={airingtodays} />
      </div>
      <div className="px-8 py-5">
        <TvshowsRow category={ontheAirCategory} tvshows={ontheAirTvShows} />
      </div>
      <div className="px-8 py-5">
        <TvshowsRow category={popularCategory} tvshows={popularTvShows} />
      </div>
      <div className="px-8 py-5">
        <TvshowsRow category={topratedCategory} tvshows={topratedTvShows} />
      </div>
    </div>
  );
}
