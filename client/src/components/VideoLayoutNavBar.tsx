import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import  LoadingGif from '../assets/loading_white.gif';

export default function VideoLayoutNavBar({title}: {title: string|boolean}) {
    const navigate = useNavigate();

    return (
        <nav className="opacity-0 hover:opacity-90 w-full flex justify-start bg-black text-white py-2 px-6 items-center transition fixed">
            <ArrowLeftIcon className="w-10 cursor-pointer" onClick={() => {navigate('/browse')}}/>
            <div className="ml-4 flex items-center gap-2">
                <p>Watching:</p>
                { title ? <span className="font-bold">{title}</span> : <img className="w-6" src={LoadingGif} alt="Loading" /> }
            </div>
        </nav>
    );
}