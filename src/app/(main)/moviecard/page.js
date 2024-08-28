"use client";
import Image from "next/image";

export default function MovieCard({
  filmTitle,
  filmtitle,
  posterUrl,
  releaseDate,
}) {
  return (
    <div className="lg:w-[150px] lg:h-[200px]  md:w-[120px] md:h-[170px] sm:w-[100px] sm:h-[140]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterUrl}`}
        alt={filmtitle}
        width={150}
        priority={false}
        height={200}
        className="rounded-lg"
      />
      <h3 className="whitespace-nowrap overflow-hidden text-ellipsis lg:text-sm sm:text-xs font-bold ml-2">
        {filmTitle}
      </h3>
      <h3 className="text-sm ml-2">{new Date(releaseDate).getFullYear()}</h3>
    </div>
  );
}
