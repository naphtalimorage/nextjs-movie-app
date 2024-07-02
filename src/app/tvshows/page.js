"use client";
import useFetchTvshows from "../usefetch/useFetchTvshows";
import Image from "next/image";
import Film from "../film/page";

export default function Tvshows() {
  const API_KEY = "9e405034103c33bc18daf866985f6671";

  const endpoint = "airing_today";
  const { data: airingtodays } = useFetchTvshows(endpoint, API_KEY);

  return (
    <div className=" ml-5 mt-4">
      <h2 className="text-2xl ">Airing Today</h2>
      <div className="flex  overflow-x-auto scroll-snap-type-x-mandatory scroll-touch mt-2">
        {airingtodays &&
          airingtodays.map((tvshow) => {
            return (
              <div key={tvshow.id} className="">
                <Film
                  filmTitle={tvshow.name}
                  releaseDate={tvshow.first_air_date}
                  posterUrl={tvshow.poster_path}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
