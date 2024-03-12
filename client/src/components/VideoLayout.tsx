import { Movie } from '../types';
import VideoLayoutNavBar from './VideoLayoutNavBar';

export default function VideoLayout({movie}: {movie: Movie}) {
    const { title, videoUrl } = movie;

    return (
        <div className="h-screen w-screen">
            <VideoLayoutNavBar title={title} />
            
            <iframe className="w-full h-full" src={videoUrl} allowFullScreen={true} allow="autoplay"></iframe>
        </div>
    );
}