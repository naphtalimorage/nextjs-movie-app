"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import MovieCard from "../../moviecard/page";
import Link from "next/link";

export default function SearchResults() {
    const apiKey = "9e405034103c33bc18daf866985f6671";
    const searchParams = useSearchParams();
    const newParam = searchParams.get('query');
    const [movies, setMovies] = useState([]);
     
    console.log(newParam);
    useEffect(() => {
        if (newParam) {
            const fetchMovies = async () => {
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${newParam}`);
                    const data = await response.json();
                    setMovies(data.results);

                } catch (e) {
                    console.error("Error fetching movies:", error);
                }

            };
            fetchMovies();
        }
    }, [newParam]);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mt-6">Search Results for <span className="text-italic text-red">{newParam}</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 mb-20 mt-10">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Link href={`/moviedetails/${movie.id}`}key={movie.id}>
                            <MovieCard
                                filmTitle={movie.title}
                                releaseDate={movie.release_date}
                                posterUrl={movie.poster_path}
                                filmtitle={movie.title}
                            />
                        </Link>
                    ))
                ) : (
                    <p className="col-span-4 text-center">No results found.</p>
                )}
            </div>
        </div>
    );
};
