"use client";
import {Card,CardHeader,CardBody,Typography,Button,} from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import PlacehoderSkeleton from "@/app/components/Skeleton";
import TvshowCastCard from "@/app/components/TvshowCastCard";
import TvshowRecommendationsCard from "@/app/components/TvshowRecommendationCard";
import useFetch from "@/app/hooks/useFetch";
import useFetchId from "@/app/hooks/useFetchId";
import Link from "next/link";
import VideoModal from "@/app/components/filmiframe/[iframe]/page";

const Details = () => {
  const API_KEY = "9e405034103c33bc18daf866985f6671";
  const { tvshowid } = useParams();
  const [tvshowTrailer, setTvshowTrailer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const category = "tv";
  const endpoint = tvshowid;
  const option1 = "recommendations";
  const option2 = "credits";

  const { details: tvshow } = useFetch(category, endpoint);
  const { cast } = useFetchId(category, endpoint, option2);
  const { recommendation } = useFetchId(category, endpoint, option1);

  useEffect(() => {
    document.cookie = "user_session=abc123; path=/; SameSite=Lax; Secure";

    const fetchTvshowTrailer = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${tvshowid}/videos?api_key=${API_KEY}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const trailers = data.results.filter(video => video.site === 'YouTube');
        if (trailers.length > 0) {
          const trailerUrl = `https://www.youtube.com/embed/${trailers[0].key}`;
          setTvshowTrailer(trailerUrl);
        } else {
          console.log('No trailers found.');
        }
      } catch (e) {
        setError(e.message);
        console.error("Error fetching trailer:", e);
      }
    }
    fetchTvshowTrailer();
  }, [tvshowid]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tvshow) {
    return (
      <div className="flex justify-center items-center mt-10">
        <PlacehoderSkeleton />
      </div>
    );
  }

  const posterUrl = tvshow.poster_path
    ? `https://image.tmdb.org/t/p/w500${tvshow.poster_path}`
    : "/path/to/placeholder-image.jpg"; 
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="shadow-2xl h-[32rem] w-[73rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <Image src={posterUrl}
              width={500} height={500} alt={`${tvshow.name} Poster`}
              priority
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="black" className="mb-4 uppercase">
              {tvshow.name}
            </Typography>
            <hr />
            <Typography variant="h6" color="blue-gray" className="mb-2 mt-2">
              {tvshow.first_air_date}
            </Typography>
            
            <Typography color="gray" className="mb-8 font-normal w-[580px]">
              <div>Overview</div>
              {tvshow.overview}
            </Typography>
            <Button
              className="flex items-center gap-2 bg-red-700 hover:bg-red-500"
              onClick={() => setIsModalOpen(true)}
            >
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
        <TvshowCastCard limit={8} casts={cast} />
      </div>
      <div className="px-10 ">
        <h2 className="flex justify-center items-center text-2xl font-sans font-bold mb-5 mt-6">Recommendations</h2>
        <div className="mb-10">
          <TvshowRecommendationsCard limit={12} recommendations={recommendation} />
        </div>
      </div>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        trailerUrl={tvshowTrailer}
      />

    </div>
  );
};

export default Details;
