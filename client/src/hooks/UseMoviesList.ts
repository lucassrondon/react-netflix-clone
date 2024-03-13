import axios from "axios";
import { useState } from "react";
import { Movie } from '../types';

const UseMoviesList = () => {
    const [loadingData, setLoadingData] = useState(false);
    const [data, setData] = useState<Movie[] | null>(null);
    const [fetchingFail, setFetchingFail] = useState<boolean | null>(null);

    async function fetchMoviesList(offset: number) {
        setLoadingData(false);
        setData(null);
        setFetchingFail(false);
        try {
            setLoadingData(true);
            const response = await axios.get(`http://localhost:8080/movies/list?offset=${offset}`);
            setLoadingData(false);
            setData(response.data);
        } catch (error) {
            setLoadingData(false);
            setFetchingFail(true);
            console.error(error);
        }
    }

    return { fetchMoviesList, data, loadingData, fetchingFail };
}

export default UseMoviesList;