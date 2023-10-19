import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse <T>{
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoding, setLoding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoding(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return err;
        setError(err.message);
        {
          setLoding(false);
        }
      });

    return () => controller.abort();
  }, []);

  return {  data, error, isLoding };
};

export default useData;
