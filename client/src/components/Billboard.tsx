import SouthparkVideo from '../assets/southpark.mp4';
import BillboardButton from './BillboardButton';

export default function Billboard(){
    return (
        <div className="relative h-screen w-screen">
            <video className="w-full h-full object-cover brightness-[60%]" src={SouthparkVideo} autoPlay muted loop ></video>

            <div className='absolute top-[40%] left-[5%]'>
                <h1 className='text-white font-bold text-7xl drop-shadow-xl mb-4'>South Park</h1>
                <div className='flex gap-4'>
                    <BillboardButton text='Play' type='play'/>
                    <BillboardButton text='More Info' type='info'/>
                </div>
            </div>
        </div>
    );
}