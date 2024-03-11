import Image from 'next/image';
import ReservationSidebar from '@/app/components/properties/ReservationSidebar';

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
                <Image src="/sapanca-1.png" className='object-cover w-full h-full' fill objectFit="cover" alt="Sapanca Wood House" />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* LEFT SIDE */}
                <div className='py-6 pr-6 col-span-3'>
                    <h1 className="text-3xl font-bold">Sapanca Wood House</h1>
                    <p className="text-gray-500">Sapanca, Sakarya, Turkey</p>
                    <span className='mb-6 block text-gray-600'>4 guests - 2 bedroom - 1 bathroom </span>
                    <div className='py-6 flex items-center space-x-4'>
                        <div className='py-6 pr-6'>
                            <Image src="/profile.jpeg" width={50} height={50} className="rounded-full" alt="The user name" />
                            <p><strong>Nomad</strong> is your host</p>
                        </div>
                        <hr />
                    </div>
                    <p className='mt-6 text-lg font-semibold'>Description</p>
                    <p className='text-gray-600'>bu kısımları Sapanca Wood House</p>
                </div>

                {/* RIGHT SIDE */}
                <div className='col-span-2'>
                    <ReservationSidebar />
                </div>
            </div>
        </main>
    );
}

export default PropertyDetailPage;
