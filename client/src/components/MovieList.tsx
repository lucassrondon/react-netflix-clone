import MovieCard from "./MovieCard";
import { Movie } from '../types';
import LoadingCard from "./LoadingCard";

interface MovieListProps {
    loadingData: boolean;
    data: Movie[] | null;
    lastElementRef: ((node: HTMLDivElement) => void) | null;
}

export default function MovieList({loadingData, data, lastElementRef}: MovieListProps){
    return (
        <div className="w-screen mb-12">
            <p className="text-black text-2xl font-semibold p-4">
                Popular Shows
            </p>

            <div className="grid grid-cols-2 gap-2 px-6 md:grid-cols-4 md:mr-4">
                {data && data.map((movie, index) => (
                    <MovieCard key={movie.id} movie={movie} lastElementRef={data.length === index + 1 ? lastElementRef : null}/>
                ))}
                {loadingData && [1,2,3,4,5,6,7,8,9,10,11,12].map((cardNumber) => (
                    <LoadingCard key={cardNumber}/>
                ))}
            </div>
        </div>
    );
}