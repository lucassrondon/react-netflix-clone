import { PlayIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Movie } from '../types';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }: {movie: Movie}) {
    const [showVideo, setShowVideo] = useState(false);
    const {id, thumbnailUrl, videoUrl, title, description, duration, genre} = movie;
    const navigate = useNavigate();

    return (
        <div className="relative group h-[24vw] md:h-[12vw] w-[100%] bg-zinc-800">
            <img className="h-full w-full object-cover group-hover:opacity-40 md:group-hover:opacity-0" src={thumbnailUrl} alt="" />

            <div className="invisible md:visible w-full h-[24vh] absolute transform transition scale-0 group-hover:translate-x-10 group-hover:-translate-y-72 opacity-0 group-hover:opacity-100 group-hover:scale-110 z-10" onMouseEnter={() => setShowVideo(true)} onMouseLeave={() => setShowVideo(false)}>
                {showVideo && <iframe className="w-full h-[12vw] object-cover rounded-t-md" src={videoUrl} allow="autoplay"></iframe>}

                <div className="flex flex-col  p-4 gap-4 bg-zinc-700 rounded-b-md z-10">
                    <div className='flex items-center justify-between z-10'>

                        <button className='bg-white hover:bg-neutral-400 p-2 rounded-full' onClick={() => {navigate(`/browse/watch/${id}`)}}>
                            <PlayIcon className='w-7 text-black' />
                        </button>

                        <button className='border-2 border-white hover:bg-neutral-400 p-2 rounded-full'>
                            <ChevronDownIcon className='w-7 text-white' />
                        </button>

                    </div>

                    <div>
                        <h1 className="text-white font-bold text-3xl">{title}</h1>
                        <p className="text-neutral-400 text-sm">{description}</p>
                    </div>

                    <div>
                        <p className="text-white">{duration}</p>
                    </div>
                    <p className="text-white">{genre}</p>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}