"use client";
import useFetchMovies from "../usefetch/useFetchMovies";
import Image from "next/image";
import Film from "../film/page";

export default function Movies() {
  const API_KEY = "9e405034103c33bc18daf866985f6671";

  const endpoint = "now_playing";
  const { data: nowplayings} = useFetchMovies(endpoint, API_KEY);

 

  return (
    <div className=" ml-5 mt-4 px-5">
    <h2 className="text-2xl ">Now Playing</h2>
    <div className="flex  overflow-x-auto scroll-snap-type-x-mandatory scroll-touch mt-2">
        {nowplayings && nowplayings.map((movie) => {
          return (
            <div key={movie.id}>
              <Film  filmTitle={movie.title} releaseDate={movie.release_date} posterUrl={movie.poster_path}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
