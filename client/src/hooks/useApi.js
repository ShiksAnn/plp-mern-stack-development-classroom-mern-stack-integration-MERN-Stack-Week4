// client/src/hooks/useApi.js
import { useState, useEffect, useCallback } from 'react';

export default function useApi(fn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const call = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fn(...args);
      setData(res);
      setLoading(false);
      return res;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  }, deps);

  useEffect(() => {
    // optional initial call - only if fn takes no args or you want default fetch
    // call();
  }, []);

  return { data, loading, error, call };
}
