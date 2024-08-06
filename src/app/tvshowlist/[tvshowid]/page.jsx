"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const Details = () => {
  const apiKey = "9e405034103c33bc18daf866985f6671";
  const [tvshow, setTvshow] = useState(null);
  const { tvshowid } = useParams();

  useEffect(() => {
    if (tvshowid) {
      const fetchTvshowDetails = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/tv/${tvshowid}?api_key=${apiKey}`
          );
          const data = await response.json();
          setTvshow(data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
        }
      };
      fetchTvshowDetails();
    }
  }, [tvshowid]);

  if (!tvshow) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{tvshow.title}</h3>
      <Image src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`} alt={`${tvshow.name} Poster`} />
      <p>{tvshow.overview}</p>
      <p>Release Date: {tvshow.first_air_date}</p>
    </div>
  );
};

export default Details;
