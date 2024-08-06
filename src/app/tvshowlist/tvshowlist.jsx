import Link from "next/link";
import Film from "../film/page";


export default function TvshowsRow({ category, tvshows }) {
  return (
    <div>
      <h2 className="text-2xl font-bold font-serif">{category}</h2>
      <div  className="movie-row">
      {tvshows &&
          tvshows.map((tvshow) => {
            return (
              <Link href={`/tvshowlist/${tvshow.id}`} key={tvshow.id}>
                <Film
                  filmTitle={tvshow.name}
                  releaseDate={tvshow.first_air_date}
                  posterUrl={tvshow.poster_path}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
