import React from 'react';
import shopbg from '../../../assets/SHop_bg.png'
import img from '../../../assets/popup.png'

function Delicious() {
    return (
        <div>
            <div className='w-full  relative'>
                <div className='z-[-1] absolute w-full h-full bg-left top-0 right-0 left-0 m-auto'>
                    <img src={shopbg} alt="background image" className=' object-cover  bg-left  h-full w-full' />
                </div>

                <div className='w-full max-sm:text-center  md:flex m-auto items-center justify-between'>
                    <div className='px-5 md:px-10 max-md:py-10 '>
                        <h2 className='text-amber-600 text-lg font-extrabold tracking-widest'>Delicious Food</h2>
                        <h1 className='text-2xl md:text-4xl font-bold tracking-wide py-5'>Enjoy Extraordinary Flavors, Each Bite A Culinary Delight</h1>
                        <button className="cursor-pointer px-5 py-3 rounded-2xl text-white bg-red-800 transition-all duration-700 hover:text-black hover:bg-white font-extrabold">
                            SHOP NOW
                        </button>
                    </div>

                   <div className='bg-amber-50 w-full justify-center items-center flex m-auto max-md:hidden'>
                     <img src={img}  className='justify-end object-cover h-auto'/>
                   </div>
                </div >
            </div >
        </div>
    );
}

export default Delicious;