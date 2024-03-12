import MovieCard from "./MovieCard";
import LoadingMovieList from "../components/LoadingMovieList";
import { Movie } from '../types';

interface MovieListProps {
    loadingData: boolean;
    data: Movie[] | null;
}

export default function MovieList({loadingData, data}: MovieListProps){
    return (
        <div className="w-screen">
            <p className="text-black text-2xl font-semibold p-4">
                Popular Shows
            </p>

            {loadingData && <LoadingMovieList />}

            {data && <div className="grid grid-cols-2 gap-2 px-6 md:grid-cols-4 md:mr-4">
                {data.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>}
        </div>
    );
}