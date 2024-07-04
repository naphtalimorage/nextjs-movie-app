import Film from "../film/page";


export default function TvshowsRow({ category, tvshows }) {
  return (
    <div>
      <h2 className="text-2xl font-bold font-serif">{category}</h2>
      <div  className="flex  overflow-x-auto scroll-snap-type-x-mandatory scroll-touch mt-2">
      {tvshows &&
          tvshows.map((tvshow) => {
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
