import React from 'react';
import firetext from '../../../assets/fire.svg'

function Contact() {
    return (
        <div>
            <div className='md:flex flex-wrap w-full justify-center items-center py-10 md:px-15' >
                <div className='rounded-xl bg-neutral-800 justify-center lg:text-center items-center m-auto w-full md:pl-10 p-2'>
                    <h1 className='py-4 md:text-left sm:text-1xl text-xl md:text-2xl font-semibold w-full text-center  h-auto m-auto flex '><span className='z-15 items-center justify-center flex pb-3 lg:text-5xl sm:text-3xl text-2xl bg-image'>Meet our master chefs</span><img src={firetext} className='lg:w-7 sm:w-5 w-4' /> </h1>
                    
                    <form action="" className='w-full'>
                        <div className='py-3 md:flex w-[100%] space-x-2 max-md:py-2'>
                            <input type="text" placeholder='Name' required className='border border-neutral-600 transition-all duration-500 hover:outline-red-600 rounded-lg px-3 w-full py-2 max-md:mb-2' />
                            <input type="email" placeholder='Email' required className='border border-neutral-600 transition-all duration-500 hover:outline-red-600 rounded-lg px-3 w-full py-2' />
                        </div>

                        <textarea name="" id="" className='border border-neutral-600 transition-all duration-500 hover:outline-red-600 rounded-lg px-3 w-full py-2 h-50 resize-none' placeholder='Message!!!'></textarea>

                        <input type="Submit" value='Book Now' className='w-full py-2 px-2 text-center bg-red-500 uppercase my-5 font-bold rounded-lg transition-all duration-700 hover:bg-neutral-100 hover:text-black cursor-pointer' />

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;