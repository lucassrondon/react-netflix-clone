import LoadingGif from '../assets/loading_white.gif';

export default function LoadingCard() {
    return (
        <div className="flex flex-center items-center justify-center h-[24vw] md:h-[12vw] w-[100%] bg-zinc-300">
            <img className='w-12' src={LoadingGif} alt="Loading" />
        </div>
    );
}