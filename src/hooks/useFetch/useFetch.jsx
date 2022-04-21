import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true);
      try {
        const res = await fetch (url);
        const json = await res.json();
        setData(json);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  
  return { data, error, isLoading };
};

export default useFetch;
