import React from 'react';
import walter1 from '../../../assets/New folder/walter1.png'

import { services } from '../../../content';

function Service() {
    return (
        <div >
            <div className="w-full h-auto bg-neutral-800">
                <div className="lg:flex space-x-6">
                     <img src={walter1} className="w-full lg:w-150" />

                    <div className="md:px-5 px-4 py-6  not-only:text-left justify-center items-center flex flex-col m-auto">
                        <div>
                            <h1 className='text-amber-600 text-lg font-extrabold tracking-widest'>Top-Notch Service</h1>

                            <h1 className='text-2xl md:text-4xl font-bold tracking-wide py-5'>Gourmet Cuisine Prepared With Love
                            </h1>
                            <p className='text-neutral-400 text-md font-light'>Arcu dictum varius duis at consectetur lorem. Lobortis scelerisque fermentum dui faucibus in. Nam aliquam sem et tortor consequat.

                            </p>
                        </div>

                        <div className='py-12 grid md:grid-cols-2 lg:grid-cols-2 sm-grid-col-1 justify-center items-center m-auto gap-5'>
                            {services.map((item, index) => (
                                <div key={index} className='py-5'>
                                   <div className='w-full h-30 justify-center items-center flex m-auto '> 
                                     <img src={item.iconImg} className='object-contain w-30' />
                                   </div>
                                    <h1 className='py-3 text-2xl uppercase '>{item.heading}</h1>
                                    <p className='text-sm font-light text-neutral-500' >{item.text}</p>
                                </div>
                            ))}
                        </div>
                            <button className="cursor-pointer px-5 py-3 rounded-2xl text-white bg-red-800 transition-all duration-700 hover:text-black hover:bg-white font-extrabold">
                                SHOP NOW
                            </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Service;