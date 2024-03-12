import LoadingGif from '../assets/loading.gif';

export default function LoadingMovieList() {
    return (
        <div className="bg-white flex items-center justify-center p-6">
            <img src={LoadingGif} alt="Loading" />
        </div>
    );
}