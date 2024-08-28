import Link from "next/link";
import MovieCard from "../moviecard/page";

export default function MovieRow({ category, movies }) {
  return (
    <div className="">
      <h2 className="lg:text-2xl md:text-xl sm:text-base font-bold font-sans mb-5">{category}</h2>
      <div className="movie-row ">
        {movies &&
          movies.map((movie) => {
            return (
              <Link href={`/moviedetails/${movie.id}/`} key={movie.id}>
                <MovieCard
                  filmTitle={movie.title || 'No Title Available'}
                  releaseDate={movie.release_date || 'Unknown Release Date'}
                  posterUrl={movie.poster_path}
                  filmtitle={movie.original_title}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
