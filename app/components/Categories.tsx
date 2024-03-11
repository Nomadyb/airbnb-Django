import Image from "next/image";

const Categories = () => {


    return (

        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center spacae-y-2 border-b-2 border-white  opacity-60 hover:border-gray-200 hover:opacity-100">               
                <Image src={"/Beach.jpeg"} width={20} height={20} layout="fixed" />                          
                <span className="text-xs font-semibold">Beach</span>
            </div>
            <div className="pb-4 flex flex-col items-center spacae-y-2 border-b-2 border-white  opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src={"/Amazing views.jpeg"} width={20} height={20} layout="fixed" />
                <span className="text-xs font-semibold">Amazing Views</span>
            </div>
            <div className="pb-4 flex flex-col items-center spacae-y-2 border-b-2 border-white  opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src={"/Tiny homes.jpg"} width={20} height={20} layout="fixed" />
                <span className="text-xs font-semibold">Tiny Homes</span>
            </div>

            
            <div className="pb-4 flex flex-col items-center spacae-y-2 border-b-2 border-white  opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src={"/Boats.jpeg"} width={20} height={20} layout="fixed" />
                <span className="text-xs font-semibold">Boats</span>
            </div>

            <div className="pb-4 flex flex-col items-center spacae-y-2 border-b-2 border-white  opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image src={"/OMG.jpeg"} width={20} height={20} layout="fixed" />
                <span className="text-xs font-semibold">OMG!</span>
            </div>


        </div>
    )

}


export default Categories;