
import { useState, useEffect } from "react";

const useFetchId = (category, endpoint, apiKey, option) => {
    const [cast, setCast] = useState([]);
    const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${category}/${endpoint}/${option}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setCast(json.cast);
        setRecommendation(json.results);
      } catch (e) {
        console.error("Error fetching data:", e);
        return;
      }
    };
    fetchData();
  }, [endpoint, apiKey, category, option]);

  return { cast, recommendation };
};

export default useFetchId;
