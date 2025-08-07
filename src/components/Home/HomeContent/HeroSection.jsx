import React from 'react'
import hero from '../../../assets/Hero/Home_BG.png'
import tag from '../../../assets/tag.png'

export default function HeroSection() {
    return (
        <div>
            <div className='z-[-1] absolute w-full h-full top-0 right-0 left-0 m-auto'>
                <img src={hero} alt="background image" className='h-full object-cover w-full' />
            </div>

            <div className='h-[100%] py-40 w-full items-center justify-center npm run dev
            flex m-auto text-center'>
                <div className='h-full '>
                    <h1 className='text-3xl sm:text-5xl lg:text-7xl text-white font-extrabold relative'>
                        <span>
                            A Symphony Of Flavours
                        </span>
                        <img src={tag} alt="Price-tag" className='absolute max-lg:hidden lg:top-4 z-[-1]' />
                    </h1>
                    <p className='text-neutral-400 justify-center items-center flex m-auto text-md  sm:w-2xl py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aut nostrum suscipit. Recusandae deleniti a laborum.</p>
                    <div className='my-5'>
                        <a href="#" className='py-4 px-5 rounded-md hover:text-neutral-800 hover:bg-neutral-100 transition-all duration-500 leading-tight bg-red-700 uppercase font-extrabold text-xl'>Shop Now</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
