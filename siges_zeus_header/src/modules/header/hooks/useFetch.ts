import { useState, useEffect } from 'react';

export const useFetch = <T>(fetchFunction: () => Promise<T>, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchFunction();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, deps);

  return { data, loading };
};
