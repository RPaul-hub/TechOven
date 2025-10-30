import { TbAirBalloon } from "react-icons/tb";
import { HiBars3BottomRight } from "react-icons/hi2";
import NavLinks from "./nav-links";

type props = {
    openNav: () => void
}

const Nav = ({openNav}: props) => {
    return(
        <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-50 fixed w-full">
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* AppName */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex flex-col items-center justify-center">
                        <TbAirBalloon />
                    </div>
                    <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
                        TechOven
                    </h1>
                </div>
                {/* Links */}
                <NavLinks />
                {/* Checkout Button */}
                <div className="flex items-center space-x-4">
                    <button className="md:px-12 md:py-2.5 px-8 py-2 text-base text-black bg-white hover:bg-gray-200 rounded-lg transition-all duration-200">
                        Subscribe
                    </button>
                </div>
                {/* Menu Icon for small screens */}
                <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
            </div>
        </div>
    )
}

export default Nav;