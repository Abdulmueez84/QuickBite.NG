import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { gallery } from '../../../content'
import '../../../../src/index.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode } from 'swiper/modules'


function Gallery() {
    return (
        <div>
            <div className='bg-neutral-800'>
                <div className="flex justify-center items-center m-auto sm:px-10 px-2">
                    <Swiper
                        breakpoints={{
                            340: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 10
                            }
                        }}

                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        modules={[FreeMode]}
                        className='flex w-full justify-center items-center mx-20 m-auto'

                    >
                        {gallery.map((item, index) => (
                            <SwiperSlide key={index} className='flex items-center justify-center m-auto'>
                                <div className='justify-center items-center m-auto flex h-80 overflow-hidden'>
                                    <div className=" relative justify-center items-center w-full h-[100%">
                                        <img src={item.gal} className=' w-full rounded-4xl' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
