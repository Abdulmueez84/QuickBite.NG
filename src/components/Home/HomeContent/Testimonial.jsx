import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonial } from '../../../content'
import firetext from '../../../assets/fire.svg'
// import titlebg from '../../../assets/title-bg.png'
import '../../../../src/index.css'
// import './index.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode } from 'swiper/modules'


function Testimonial() {
    return (
        <div>
            <div className="w-full bg-neutral-800 py-15 rounded-t-4xl">
                <div className='justify-center items-center m-auto flex flex-col '>
                    <h1 className=' text-center sm:text-1xl text-xl md:text-2xl font-semibold lg:w-200 justify-center p-3 h-auto m-auto flex '><img src={firetext} className='lg:w-7 sm:w-5 w-4' /><span className='z-15 items-center justify-center flex  px-3 lg:text-5xl sm:text-3xl text-2xl bg-image'>Meet our master chefs</span><img src={firetext} className='lg:w-7 sm:w-5 w-4' /> </h1>
                    <p className='text-center text-lg  text-neutral-400 pb-10 p-5 lg:w-120 flex auto items-center justify-center'>Elit sed vulputate mi sit amet mauris commodo. Integer enim neque volutpat ac tincidunt vitae semper quis.</p>
                </div>

                <div className="flex justify-center items-center m-auto sm:px-10 px-2">
                    <Swiper
                        breakpoints={{
                            340: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            }
                        }}

                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        modules={[FreeMode]}
                        className='flex w-full justify-center items-center mx-20 m-auto'

                    >
                        {testimonial.map((item, index) => (
                            <SwiperSlide key={index} className='flex items-center justify-center m-auto'>
                                <div className='justify-center items-center m-auto flex h-80 overflow-hidden border-radius'>
                                    <div className=" relative justify-center items-center w-full h-[100%">
                                        <img src={item.image} className=' w-full' />
                                    </div>
                                </div>
                                <div className='text-center items-center justify-center py-5'>
                                    <h1 className='text-xl'>{item.name}</h1>
                                    <p>{item.duty}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;