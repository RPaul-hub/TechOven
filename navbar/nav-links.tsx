"use client";
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'All Products' },
  { href: '/cart', label: 'My Cart'},
  { href: '/about', label: 'About'},
  { href: '/contactus', label: 'Contact Us'}
];

export default function NavLinks() {

    return ( 
        <div className="hidden lg:flex items-center space-x-10">
            {
                links.map(({href,label}) => {
                    return (
                        <Link key={label} href={href} >
                            <p className="relative text-white text-base font-medium w-fit group">
                                <span>{label}</span>
                                <span className="absolute left-0 -bottom-1.5 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
                            </p>
                        </Link>
                    )
                })           
            }
        </ div>
    )
}

