import { Carousel, IconButton } from "@material-tailwind/react";
import useFetchMovies from "@/app/fetchingmovies/useFetchmovies";
import SearchBar from "../searchbar/SearchBar";
// import Image from "next/image";
export function CarouselCustomArrows() {
  const API_KEY = "9e405034103c33bc18daf866985f6671";

  const endpoint = "now_playing";

  const { data: movies } = useFetchMovies(endpoint, API_KEY);

  return (
    <Carousel
      className=" h-96"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-1/3 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                // layout="fill"
                // objectFit="cover"
                className="h-96 w-full"
              />
              {/* <div className= "overlay"></div> */}
            </div>
          );
        })}
                  <SearchBar />

    </Carousel>
  );
}
