import React, { useState } from 'react'
// import { Routes } from "react-router"
import { Link } from 'react-router-dom'
import "../../src/index.css"
import Headline from './Headline'
import { navItems} from '../content'
import { Menu, ShoppingCart, X } from 'lucide-react'
import logo from '../assets/logo_1.png'
// import logo from '../assets/logo_1.png'
// import { Menu, X } from 'lucide-react'

const Navbar = ({cartAllProducts}) => {

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav)
    }


    return (
        <>
            <Headline />


            <nav className='w-full sticky top-0 right-0 z-50 backdrop-blur-lg'>
                <div className='max-sm:px-2 sm:px-4 py-3 justify-between items-center flex m-auto relative'>
                    <button onClick={toggleNav} className='sm:hidden cursor-pointer'>
                        {showNav ? <X /> : <Menu />}
                    </button>

                    <div className="w-35 h-full">
                        <img src={logo} className="w-full h-full object-contain cursor-pointer" />
                    </div>
                    {/* 
                    <button className='sm:hidden cursor-pointer'>
                        <EllipsisVertical />
                    </button> */}



                    <ul className='hidden sm:flex'>
                        {navItems.map((item, index) => (
                            <li key={index} className='flex justify-between items-center mx-2'>
                                <p className='flex lg:px-2 cursor-pointer font-medium lg:font-bold text-md lg:text-xl hover:text-amber-600 transition-all duration-500 justify-center items-center'> {item.label}  </p> 
                                <p className=' hover:text-amber-600 transition-all duration-500 text-center items-center mr-2 h-full cursor-pointer justify-center flex '>{item.icon}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="">

                        <div className="relative justify-center items-center flex flex-col">
                            <Link to='/Cart.jsx'>
                                <p className='pr-5 hover:text-amber-600 transition-all duration-500 cursor-pointer flex justify-between items-center'><ShoppingCart size={25} strokeWidth={2.5} /></p>
                                <span className='absolute flex top-3 rounded-full text-white p-1 h-5 text-center justify-center items-center bg-red-600 font-extrabold right-3 '>
                                    {cartAllProducts.length}
                                </span>
                            </Link>
                        </div>

                    </div>

                    {showNav && (
                        <div className='transition-all duration-500 fixed mt-80 z-10 right-0  bg-neutral-800 w-full py-5 px-3 sm:hidden'>
                            <ul>
                                {
                                    navItems.map((item, index) => (
                                        <li key={index} className='flex justify-between items-center mx-2'>
                                            <p href="#" className='flex py-2 lg:px-2 cursor-pointer font-medium lg:font-bold text-md lg:text-xl hover:text-amber-600 transition-all duration-500 justify-center items-center'> {item.label}  </p> <button className=' hover:text-amber-600 transition-all duration-500 text-center items-center mr-2 h-full cursor-pointer'>{item.icon}</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}

                </div>
            </nav >
        </>
    )
}

export default Navbar
