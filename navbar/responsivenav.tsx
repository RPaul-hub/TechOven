'use client'
import { useState } from "react"
import MobileNav from "./mobilenav"
import Nav from "./nav"

const ResponsiveNav = () => {
    
    const [showNav, setShowNav] = useState(false)

    const handShowNav = () => setShowNav(true);
    const handCloseNav = () => setShowNav(false);
    
    return (
        <>
            <Nav openNav={handShowNav}/>
            <MobileNav showNav={showNav} closeNav={handCloseNav}/>
        </>
    )
}

export default ResponsiveNav;