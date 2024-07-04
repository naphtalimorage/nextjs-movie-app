import Film from "../film/page";


export default function MovieRow({ category, movies }) {
  return (
    <div>
      <h2 className="text-2xl font-bold font-serif">{category}</h2>
      <div  className="flex  overflow-x-auto  scroll-touch mt-2">
        {movies &&
          movies.map((movie) => {
            return (
              <div key={movie.id}>
                <Film
                  filmTitle={movie.title}
                  releaseDate={movie.release_date}
                  posterUrl={movie.poster_path}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
