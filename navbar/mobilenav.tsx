import Link from "next/link";
import { CgClose } from "react-icons/cg";

type props = {
    showNav : boolean,
    closeNav : () => void
}

const MobileNav = ({showNav, closeNav}: props) => {

    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    const links = [
        { href: '/', label: 'Home' },
        { href: '/products', label: 'All Products' },
        { href: '/cart', label: 'My Cart'},
        { href: '/about', label: 'About'},
        { href: '/contactus', label: 'Contact Us'}
    ];

    return(
        <div>
            {/* overlay */}
            <div className={`fixed z-52 bg-black opacity-70 w-full h-screen ${navOpen} transform transition-all duration-400`}></div>
            {/* Links */}
            <div className={`fixed text-white justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-60 ${navOpen} transform transition-all duration-400`}>
                {
                    links.map(({href,label}) => {
                        return (
                            <Link key={label} href={href} >
                                <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                                    {label}
                                </p>
                            </Link>
                        )
                    })           
                }
                {/* Close Buttton */}
                <CgClose onClick={closeNav} className="text-white absolute top-4 right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"/>
            </div>
        </div>
    )
}

export default MobileNav;