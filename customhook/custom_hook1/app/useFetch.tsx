import { useEffect, useState } from 'react';

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading };
}
export default useFetch;