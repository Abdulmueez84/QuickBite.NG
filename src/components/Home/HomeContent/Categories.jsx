import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { category } from '../../../content'
import firetext from '../../../assets/fire.svg'
// import titlebg from '../../../assets/title-bg.png'
import '../../../../src/index.css'
// import './index.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'



export default function Categories() {
    return (
        <div>
            <div className="w-full bg-neutral-800 py-15 rounded-t-4xl">
                <div>
                    <h1 className='bg-image text-center sm:text-1xl text-xl md:text-2xl font-semibold lg:w-200 justify-center p-10 m-auto h-50 item flex '><img src={firetext} className='lg:w-10 sm:w-5 w-4' /><span className='z-15 items-center justify-center flex  px-3 lg:text-5xl sm:text-3xl text-2xl'>Our Popular Categories</span><img src={firetext} className='lg:w-10 sm:w-5 w-4' /> </h1>
                </div>

                <div className="flex justify-center items-center m-auto sm:px-10 px-2">
                    <Swiper
                        breakpoints={{
                            340: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            700: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            1024: {
                                slidesPerView: 3,
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
                        {category.map((item, index) => (
                            <SwiperSlide key={index} className='flex items-center justify-center m-auto'>
                                <div className='justify-center items-center m-auto flex h-80 overflow-hidden border-radius'>
                                    <div className=" relative justify-center items-center flex w-full ">
                                        <img src={item.image} className='w-full' />
                                        <div className='absolute text-center flex flex-col items-center justify-center transition-all duration-700 hover:bg-gradient-to-t from-red-700/100 to-red-400/1000 w-full h-[100%]  opacity-0 hover:opacity-100 bottom-0 py-5'>
                                            <h1 className='py-5 text-5xl font-bold text-capitalize'>{item.heading}</h1>
                                            <h1 className='text-xl '>{item.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}
