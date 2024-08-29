
import { useState, useEffect } from "react";

const useFetchId = (category, endpoint, option) => {
    const [cast, setCast] = useState([]);
    const [recommendation, setRecommendation] = useState([]);
    const apiKey = "9e405034103c33bc18daf866985f6671";

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
  }, [endpoint, category, option]);

  return { cast, recommendation };
};

export default useFetchId;
