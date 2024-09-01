import { useState, useEffect } from "react";

const useFetch = (category, endpoint) => {
  const [data, setData] = useState(null);
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "9e405034103c33bc18daf866985f6671";


  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${category}/${endpoint}?api_key=${apiKey}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json.results);
        setDetails(json); 
      } catch (e) {
        if (e.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error("Error fetching data:", e);
          setError(e.message);
        }
      }
    };
    fetchData();

    return () => controller.abort();
  }, [endpoint, category]);

  return { data, details, error };
};

export default useFetch;
