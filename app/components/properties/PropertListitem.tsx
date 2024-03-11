import Image from 'next/image';

const PropertyListitem = ({ }) => {
    return (
        <div className="cursor-pointer">

            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image 
                    fill
                    src={"/sapanca-1.png"}
                    sizes="(min-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transform transition duration-300 ease-out" 
                    alt="Sapanca Wood House"
                />
                
            </div>
            <div className='mt-2'>
                <p className="text-lg font-bold">Sapanca Wood House</p>
            </div>


            <div className='mt-2'>
                <p className="text-sm text-gray-600"><strong>$200</strong> per night</p>
            </div>
        </div>
    );
}
export default PropertyListitem;