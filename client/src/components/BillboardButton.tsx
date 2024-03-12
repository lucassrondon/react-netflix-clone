import { PlayIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface BillboardButtonProps {
    text: string,
    type: 'info' | 'play',
}

export default function BillboardButton({text, type}: BillboardButtonProps){
    return (
        <button className={`${type === 'info' ? 'bg-opacity-40 text-white' : null} flex items-center bg-white font-semibold rounded py-2 px-4 hover:bg-neutral-400 transition`}>
            {type === 'info' ? <InformationCircleIcon className='w-7 mr-2' /> : <PlayIcon className='w-7 mr-2' />}
            <p>{text}</p>
        </button>
    );
}