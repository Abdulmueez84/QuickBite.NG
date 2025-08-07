import React from 'react';
import { MapPinned, Mail, Phone, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import logo from '../assets/logo_1.png'

function Footer() {
    return (

        <div className='w-full justify-center items-center mt-8 flex flex-col  '>
            <div className="px-5 bg-neutral-700 py-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center w-full items-center">

                <div className='pr-10'>
                    <div className="w-55 h-full py-5">
                        <img src={logo} className="w-full h-full object-contain cursor-pointer" />
                    </div>
                    <div>
                        <h1 className='flex py-2 text-md text-neutral-300'>
                            <span className='px-2 text-center h-full text-red-400 justify-center items-center flex' >
                                <MapPinned size={25} />
                            </span >
                            <span>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</span>
                        </h1>
                        <h1 className='flex py-2 text-md text-neutral-300'>
                            <span className='px-2 text-center h-full text-red-400 justify-center items-center flex '>
                                <Mail size={25} />
                            </span >
                            <span>info@example.com</span>
                        </h1>
                        <h1 className='flex py-2 text-md text-neutral-300'>
                            <span className='px-2  2text-center h-full text-red-400 justify-center items-center flex'>
                                <Phone size={25} />
                            </span >
                            <span>000 - 123 - 456789 </span>
                        </h1>


                    </div>

                </div>

                <div>
                    <h1 className='text-2xl md:text-4xl justify-center items-center py-2 font-bold leading-tight'>Useful Links</h1>
                    <ul>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Careers</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Track Order</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Returns</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Customer Support</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Gift Voucher</a></li>

                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl md:text-4xl justify-center items-center py-2 font-bold leading-tight'>Explore</h1>
                    <ul>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">History</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Team</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Community</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Partnerships</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Gallery
                        </a></li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl md:text-4xl justify-center items-center py-2 font-bold leading-tight'>Information</h1>
                    <ul>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Testimonials</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Resources</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Events</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Shipping Information</a></li>
                        <li className='transition-all duration-700 py-2 hover:text-amber-600 hover:px-3 text-neutral-400 font-light leading-tight'><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className='md:flex justify-center md:justify-between items-center w-full px-6 py-5 bg-neutral-900'>
                <div className="h-auto my-2 w-full text-center justify-center items-center  md:flex">
                    <ul className='md:flex text-neutral-400'>
                        <li><a href="#" className='text-lg transition-all duration-700 hover:text-amber-700 px-3 py-3 '>Terms & Condition</a></li>
                        <li><a href="#" className='max-md:w-full text-lg transition-all duration-700 hover:text-amber-700 px-3 py-3 '>Disclaimer</a></li>
                        <li><a href="#" className='max-md:w-full text-lg transition-all duration-700 hover:text-amber-700 px-3 py-3 '>Terms of Service</a></li>
                        <li><a href="#" className='max-md:w-full text-lg transition-all duration-700 hover:text-amber-700 px-3 py-3 '>Legal</a></li>
                    </ul>
                </div>

                <div className="flex text-center w-full justify-center my-2">
                    <a href="#" className='px-2 transition-all duration-500 border rounded-full border-neutral-50 py-2 hover:text-amber-700 hover:border-amber-700 mx-2'>
                        <Instagram size={20} />
                    </a>
                    <a href="#" className='px-2 transition-all duration-500 border rounded-full border-neutral-50 py-2 hover:text-amber-700 hover:border-amber-700 mx-2'>
                        <Facebook size={20} />
                    </a>
                    <a href="#" className='px-2 transition-all duration-500 border rounded-full border-neutral-50 py-2 hover:text-amber-700 hover:border-amber-700 mx-2'>
                        <Twitter size={20} />
                    </a>
                    <a href="#" className='px-2 transition-all duration-500 border rounded-full border-neutral-50 py-2 hover:text-amber-700 hover:border-amber-700 mx-2'>
                        <Youtube size={20} />
                    </a>
                </div>
            </div>

        </div>
    );
}












export default Footer;