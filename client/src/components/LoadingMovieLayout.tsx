import VideoLayoutNavBar from './VideoLayoutNavBar';
import LoadingGif from '../assets/loading_white.gif';

export default function LoadingMovieLayout() {
    return (
        <div className="h-screen w-screen">
            <VideoLayoutNavBar title={false} />
            
            <div className='w-full h-full flex items-center justify-center bg-black'>
                <img src={LoadingGif} alt="Loading" className='w-[10%] opacity-70' />
            </div>
        </div>
    );
}