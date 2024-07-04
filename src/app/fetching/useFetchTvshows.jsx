"use client"

import { useState, useEffect } from 'react';

const useFetchTvshows = (endpoint, apiKey) => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${endpoint}?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json.results);
    };

    fetchData();
  }, [endpoint, apiKey]);

  return { data};
};

export default useFetchTvshows;
