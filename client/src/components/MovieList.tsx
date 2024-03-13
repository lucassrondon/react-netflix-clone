import MovieCard from "./MovieCard";
import LoadingMovieList from "../components/LoadingMovieList";
import { Movie } from '../types';

interface MovieListProps {
    loadingData: boolean;
    data: Movie[] | null;
    lastElementRef: ((node: HTMLDivElement) => void) | null;
}

export default function MovieList({loadingData, data, lastElementRef}: MovieListProps){
    console.log("rerendered")
    return (
        <div className="w-screen">
            <p className="text-black text-2xl font-semibold p-4">
                Popular Shows
            </p>

            {loadingData && <LoadingMovieList />}

            {data && <div className="grid grid-cols-2 gap-2 px-6 md:grid-cols-4 md:mr-4">
                {data.map((movie, index) => (
                    <MovieCard key={movie.id} movie={movie} lastElementRef={data.length === index + 1 ? lastElementRef : null}/>
                ))}
            </div>}
        </div>
    );
}