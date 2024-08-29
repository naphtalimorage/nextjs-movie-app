
import { useState, useEffect } from "react";

const useFetch = (category, endpoint) => {
  const [data, setData] = useState(null);
  const [details, setDetails] = useState(null);
  const apiKey = "9e405034103c33bc18daf866985f6671";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${category}/${endpoint}?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json.results);
        setDetails(json);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    fetchData();
  }, [endpoint, category]);

  return { data, details };
};

export default useFetch;
