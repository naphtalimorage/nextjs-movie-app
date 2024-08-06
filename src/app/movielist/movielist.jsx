import Link from "next/link";
import Film from "../film/page";

export default function MovieRow({ category, movies}) {
  return (
    <div>
      <h2 className="text-2xl font-bold font-serif">{category}</h2>
      <div className="movie-row">
        {movies &&
          movies.map((movie) => {
            return (
              <Link href={`/movielist/${movie.id}/`} key={movie.id}>
                <Film
                  filmTitle={movie.title}
                  releaseDate={movie.release_date}
                  posterUrl={movie.poster_path}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
