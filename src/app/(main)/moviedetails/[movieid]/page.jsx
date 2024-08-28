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
  const apiKey = "9e405034103c33bc18daf866985f6671";
  const { movieid } = useParams();


  const category = "movie";
  const endpoint = movieid;
  const option1 = "recommendations";
  const option2 = "credits";

  const { details: movie } = useFetch(category, endpoint, apiKey);
  const {cast: cast}= useFetchId(category, endpoint, apiKey, option2);
  const {recommendation: recommendation}= useFetchId(category, endpoint, apiKey, option1);
  
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
