import NavBar from "../components/NavBar";
import Billboard from '../components/Billboard';
import MovieList from "../components/MovieList";
import UseMoviesList from "../hooks/UseMoviesList";
import { useEffect } from "react";

export default function BrowsePage(){
    const { fetchMoviesList, data, loadingData } = UseMoviesList();

    useEffect(() => {fetchMoviesList()}, []);
    
    return (
        <div>
            <NavBar />
            <Billboard />
            <div className="w-screen">
                <MovieList loadingData={loadingData} data={data} />
            </div>
        </div>
    );
}