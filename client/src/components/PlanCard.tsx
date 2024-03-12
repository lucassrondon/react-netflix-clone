import { CheckIcon } from '@heroicons/react/24/outline';

export default function PlanCard(){
    return (
        <div className="w-full border rounded p-4">
            <div className="bg-gradient-to-l from-blue-500 to-green-400 rounded p-2">
                <h1 className="text-white font-semibold">Basic</h1>
                <p className="text-white">$5.99</p>
            </div>

            <div className='border-b mt-2 p-2 flex items-center gap-3'>
                <div className='w-6 h-6 bg-gradient-to-l from-blue-500 to-green-400 rounded-full flex items-center justify-center'>
                    <CheckIcon color='white' width={15} fontWeight={900}/>
                </div>

                <div>
                    <p className='text-gray-500'>Monthly price:</p>
                    <p className='font-bold'>$5.00</p>
                </div>
            </div>

            <div className='border-b mt-2 p-2 flex items-center gap-3'>
                <div className='w-6 h-6 bg-gradient-to-l from-blue-500 to-green-400 rounded-full flex items-center justify-center'>
                    <CheckIcon color='white' width={15} fontWeight={900}/>
                </div>

                <div>
                    <p className='text-gray-500'>Downloads</p>
                    <p className='font-bold'>Included</p>
                </div>
            </div>

            <div className='border-b mt-2 p-2 flex items-center gap-3'>
                <div className='w-6 h-6 bg-gradient-to-l from-blue-500 to-green-400 rounded-full flex items-center justify-center'>
                    <CheckIcon color='white' width={15} fontWeight={900}/>
                </div>

                <div>
                    <p className='text-gray-500'>South Park</p>
                    <p className='font-bold'>Included</p>
                </div>
            </div>
        </div>
    );
}