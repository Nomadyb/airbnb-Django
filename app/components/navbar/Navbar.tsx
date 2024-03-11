import Image from "next/image";
import Link from "next/link";

import SearchFilter from "./SearchFilter";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";

const Navbar = () => {

    return (

        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10 ">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">


                    <Link href="/">
                            <img src="https://links.papareact.com/qd3" alt="airbnb" className="h-12 " />
                    </Link>

                    <div className="flex space-x-6">

                        <SearchFilter />
                        
                        {/* <p className="text-gray-500 cursor-pointer hover:text-gray-800">Places to stay</p>
                        <p className="text-gray-500 cursor-pointer hover:text-gray-800">Experiences</p>
                        <p className="text-gray-500 cursor-pointer hover:text-gray-800">Online Experiences</p> */}
                    
                    </div>
                    
                    <div className="flex item-center space-x-6">
                        <AddPropertyButton />
                       <UserNav />

                    </div>

                </div>
            </div>
            

        </nav>

    )
}


export default Navbar;