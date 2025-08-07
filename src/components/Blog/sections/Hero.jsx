import React from 'react';
import shopbg from '../../../assets/SHop_bg.png'

function Hero() {
    return (
        <div className='w-full h-full'>
            <div className='z-[-1] absolute w-full h-full py-20 top-0 right-0 left-0 m-auto'>
                <img src={shopbg} alt="background image" className='object-cover sm:object-cover h-100 w-full bg-left-top' />
            </div>

            <div className='w-full justify-center items-center flex m-auto h-70 lg:h-100'>
                <div className=' h-full items-center justify-center flex flex-col '>
                    <h1 className='py-4 md:text-4xl text-2xl leading-tight'>News</h1>
                    <p className='flex text-xl'>
                        <a className='px-2 transition-all duration-500 hover:text-amber-700' href="#">Home </a> /
                        {/* <a className='px-2 transition-all duration-500 hover:text-amber-700' href="#">All Collections </a> / */}
                        <a className='px-2' href="#">News</a>
                    </p>
                </div>

            </div >
        </div >
    );
}

export default Hero;