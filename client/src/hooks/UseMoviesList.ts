import axios from "axios";
import { useState } from "react";
import { Movie } from "../types";
import Cookie from "universal-cookie";

const UseMoviesList = () => {
  const [loadingData, setLoadingData] = useState(false);
  const [data, setData] = useState<Movie[] | null>(null);
  const [lastPage, setLastPage] = useState<boolean>(false);
  const [fetchingFail, setFetchingFail] = useState<boolean | null>(null);
  const [error, setError] = useState<string>("");

  const cookie = new Cookie();

  async function fetchMoviesList(offset: number) {
    setLoadingData(false);
    setFetchingFail(false);
    try {
      setLoadingData(true);
      const response = await axios.get(
        `http://localhost:8080/movies/list?offset=${offset}`,
        {
          headers: { Authorization: `Bearer ${cookie.get("session_token")}` },
        }
      );
      setLoadingData(false);
      const moviesData = data
        ? [...data, ...response.data.movies]
        : response.data.movies;
      setData(moviesData);
      setLastPage(response.data.lastPage);
    } catch (error) {
      setLoadingData(false);
      setFetchingFail(true);
      if (error.response?.status === 401) {
        setError("Session expired. Please, log in again");
      } else {
        setError("Something went wrong.");
      }
    }
  }

  return { fetchMoviesList, data, loadingData, fetchingFail, error, lastPage };
};

export default UseMoviesList;
