"use client"
export default function Film({ filmTitle, posterUrl, releaseDate}) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${posterUrl}`}
        alt={filmTitle}
        width={75}
        height={75}
      className="border-r-7"/>
      <h3>{filmTitle}</h3>
      <h3>{new Date(releaseDate).getFullYear()}</h3>
    </div>
  );
}
