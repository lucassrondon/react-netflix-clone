import axios from "axios";
import { useState } from "react";
import { Movie } from '../types';

const UseMoviesList = () => {
    const [loadingData, setLoadingData] = useState(false);
    const [data, setData] = useState<Movie[] | null>(null);
    const [lastPage, setLastPage] = useState<boolean>(false);
    const [fetchingFail, setFetchingFail] = useState<boolean | null>(null);

    async function fetchMoviesList(offset: number) {
        setLoadingData(false);
        setFetchingFail(false);
        try {
            setLoadingData(true);
            const response = await axios.get(`http://localhost:8080/movies/list?offset=${offset}`);
            setLoadingData(false);
            const moviesData = data ? [...data, ...response.data.movies] : response.data.movies;
            setData(moviesData);
            setLastPage(response.data.lastPage);
        } catch (error) {
            setLoadingData(false);
            setFetchingFail(true);
            console.error(error);
        }
    }

    return { fetchMoviesList, data, loadingData, fetchingFail, lastPage };
}

export default UseMoviesList;