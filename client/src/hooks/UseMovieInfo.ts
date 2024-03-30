import axios from "axios";
import { useState } from "react";
import { Movie } from "../types";
import Cookie from "universal-cookie";

const UseMovieInfo = () => {
  const [loadingData, setLoadingData] = useState(false);
  const [data, setData] = useState<Movie | null>(null);
  const [fetchingFail, setFetchingFail] = useState<boolean | null>(null);

  const cookie = new Cookie();

  async function fetchMovieInfo(movieId: string | undefined) {
    setLoadingData(false);
    setData(null);
    setFetchingFail(false);
    try {
      setLoadingData(true);
      const response = await axios.get(
        `http://localhost:8080/movie/${movieId}`,
        {
          headers: { Authorization: `Bearer ${cookie.get("session_token")}` },
        }
      );
      setLoadingData(false);
      setData(response.data);
    } catch (error) {
      setLoadingData(false);
      setFetchingFail(true);
      console.error(error);
    }
  }

  return { fetchMovieInfo, data, loadingData, fetchingFail };
};

export default UseMovieInfo;
