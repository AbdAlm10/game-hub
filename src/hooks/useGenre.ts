import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoding, setLoding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoding(true);
    apiClient
      .get<FetchGenresResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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

  return {  genres, error, isLoding };
};

export default useGenre;
