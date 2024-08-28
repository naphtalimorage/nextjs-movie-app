import Link from "next/link";
import MovieCard from "../moviecard/page";


export default function TvshowsRow({ category, tvshows }) {
  return (
    <div>
      <h2 className="lg:text-2xl md:text-xl sm:text-base font-bold font-sans mb-5">{category}</h2>
      <div  className="movie-row">
      {tvshows &&
          tvshows.map((tvshow) => {
            return (
              <Link href={`/tvshowlist/${tvshow.id}`} key={tvshow.id}>
                <MovieCard
                  filmTitle={tvshow.name}
                  releaseDate={tvshow.first_air_date}
                  posterUrl={tvshow.poster_path}
                  filmtitle={tvshow.name}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
