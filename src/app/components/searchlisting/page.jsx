"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SearchResults() {
    const router = useRouter();
    const { query } = router.query;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (router.isReady) {
            const fetchMovies = async () => {
                setLoading(true);
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                    params: {
                        api_key: 'YOUR_TMDB_API_KEY',
                        query: query
                    }
                });
                setMovies(response.data.results);
                setLoading(false);
            };
            fetchMovies();
        }
    }, [router.isReady, query]);

    return (
        <div>
            <h1>`Search Results for ${query}`</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul style={styles.list}>
                    {movies.map(movie => (
                        <li key={movie.id} style={styles.listItem}>
                            {movie.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
