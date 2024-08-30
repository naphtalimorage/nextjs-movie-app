"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MovieCastCard from "@/app/components/MovieCastCard";
import MovieDetailsCard from "@/app/components/MovieDetailsCard";
import MovieRecommendationsCard from "@/app/components/MovieRecommendationCard";
import PlacehoderSkeleton from "@/app/components/Skeleton";
import useFetch from "@/app/hooks/useFetch";
import useFetchId from "@/app/hooks/useFetchId";

const Details = () => {
  const API_KEY = "9e405034103c33bc18daf866985f6671";
  const { movieid } = useParams();
  const [trailer, setTrailer]= useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${API_KEY}`);
        const data = await response.json();
        const trailer = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if(trailer){
          setTrailer(`https://www.youtube.com/watch?v=${trailer.key}`);
        }else{
          console.log("No trailer found");
        }
      }catch(e){
        console.error("Error fetching trailer:", e);
      }
    }
    fetchTrailer();
  },[movieid, API_KEY]);


  const category = "movie";
  const endpoint = movieid;
  const option1 = "recommendations";
  const option2 = "credits";

  const { details: movie } = useFetch(category, endpoint,);
  const {cast: cast}= useFetchId(category, endpoint, option2);
  const {recommendation: recommendation}= useFetchId(category, endpoint, option1);
  
  if (!movie) {
    return (
      <div className="flex justify-center items-center mt-10">
        <PlacehoderSkeleton />
      </div>
    );
  }
  return (
    <div>
      <MovieDetailsCard
        moviepath={movie.poster_path}
        movietitle={movie.title}
        moviereleasedate={movie.release_date}
        movieoverview={movie.overview}
        trailer={trailer}
      />
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
    </div>
  );
};

export default Details;
