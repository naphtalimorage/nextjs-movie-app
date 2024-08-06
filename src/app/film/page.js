"use client"

import Link from "next/link";

export default function Film({ filmTitle, posterUrl, releaseDate}) {
  return (
    <div className="w-40 h-70 ">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterUrl}`}
        alt={filmTitle}
        width={150}
        height={80}
      className="rounded-lg"/>      
      <h3 className="whitespace-nowrap overflow-hidden text-ellipsis text-lg font-semibold">{filmTitle}</h3>
      <h3>{new Date(releaseDate).getFullYear()}</h3>
    </div>
  );
}
