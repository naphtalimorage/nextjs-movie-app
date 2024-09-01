"use client";
import { Card, CardHeader, CardBody, Typography, Button, } from "@material-tailwind/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MovieCastCard from "@/app/components/MovieCastCard";
import MovieRecommendationsCard from "@/app/components/MovieRecommendationCard";
import PlacehoderSkeleton from "@/app/components/Skeleton";
import useFetch from "@/app/hooks/useFetch";
import useFetchId from "@/app/hooks/useFetchId";
import VideoModal from "@/app/components/filmiframe/[iframe]/page";

const Details = () => {
  const API_KEY = "9e405034103c33bc18daf866985f6671";
  const { movieid } = useParams();
  const [trailer, setTrailer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${API_KEY}`);
        const data = await response.json();
        const trailer = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailer(`https://www.youtube.com/embed/${trailer.key}`);
        } else {
          console.log("No trailer found");
        }
      } catch (e) {
        console.error("Error fetching trailer:", e);
      }
    }
    fetchTrailer();
  }, [movieid]);


  const category = "movie";
  const endpoint = movieid;
  const option1 = "recommendations";
  const option2 = "credits";

  const { details: movie } = useFetch(category, endpoint,);
  const { cast: cast } = useFetchId(category, endpoint, option2);
  const { recommendation: recommendation } = useFetchId(category, endpoint, option1);

  if (!movie) {
    return (
      <div className="flex justify-center items-center mt-10">
        <PlacehoderSkeleton />
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="shadow-2xl lg:h-[32rem] lg:w-[73rem] md:h-[28rem] md:w-[60rem] sm:h-[25rem] sm:w-[40rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >

            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={500} height={500} alt={`${movie.title} Poster`}
              priority
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="black" className="mb-4 uppercase">
              {movie.title}
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Release Date: {movie.release_date}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              {movie.overview}
            </Typography>
            <Button onClick={() => setIsModalOpen(true)} variant="text" className="flex items-center gap-2">
              Play Trailer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </CardBody>
        </Card>
      </div>
      <div className="px-10">
        <h2 className="text-2xl mb-5 font-sans font-bold">Top Cast</h2>
        <MovieCastCard casts={cast} />
      </div>
      <div className="px-10">
        <h2 className="flex justify-center items-center text-2xl font-sans font-bold mb-5 mt-6">Recommendations</h2>
        <div className="mb-10">
          <MovieRecommendationsCard recommendations={recommendation} />
        </div>
      </div>
      <VideoModal
        trailerUrl={trailer}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}  
      />
    </div>
  );
};

export default Details;
