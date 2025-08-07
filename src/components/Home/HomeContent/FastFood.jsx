import React from 'react'
import firetext from '../../../assets/fire.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FFoods } from '../../../content/index'
import icon_img1 from '../../../assets/Mask_group_1.webp'
import icon_img2 from '../../../assets/chiicon.webp'
// import menu from '../../../assets/menu.png'
import '../../../../src/index.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'

import { ArrowBigRight, ArrowBigLeft, ShoppingCart, ShoppingBag } from 'lucide-react'



export default function FastFood() {
    return (
        <div className='py-10 bg-neutral-900 ' >
            <div className='md:flex w-full justify-between md:1/2 space-x-4.5 h-auto relative overflow-hidden '>
                <div className=" justify-center items-center flex flex-col p-5 md:pl-20 w-full md:w-[50%] text-center py-20 md:text-left h-auto bg-neutral-800 md:rounded-r-4xl">
                    <h1 className='text-left  font-semibold lg:w-full flex pb-5'><span className='z-15 flex lg:text-5xl sm:text-4xl  text-2xl'>We're the leading fast-food maker in town</span><img src={firetext} className='lg:w-6 sm:w-5 w-4 hidden md:block' /> </h1>

                    <p className='pb-5 text-neutral-400 text-left'>
                        Dictum non consectetur a erat nam at lectus urna duis. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus.
                    </p>

                    <div className="flex flex-col justify-start space-y-6 py-5">
                        <div className="flex w-full sm:w-80 md:w-full">
                            <img src={icon_img2} className='object-contain bg-red-700 p-3 rounded-xl' />
                            <h1 className='text-left text-lg text-neutral-300 p-3'>
                                Justo donec enim diam vulputate ut pharetra sit.
                            </h1>
                        </div>
                        <div className="flex w-full sm:w-80 md:w-full">
                            <img src={icon_img1} className='object-contain bg-red-700 p-3 rounded-xl' />
                            <h1 className='text-left text-lg text-neutral-300 p-3'>
                                Justo donec enim diam vulputate ut pharetra sit.
                            </h1>
                        </div>
                        <div className='my-5'>
                            <a href="#" className='py-3 px-4 lg:py-4 rounded-md hover:text-neutral-800 hover:bg-neutral-100 transition-all duration-500 leading-tight bg-red-700 uppercase font-bold text-lg'>Shop Now</a>
                        </div>
                    </div>
                </div>


                <div className=" w-full md:w-[50%]  ">
                    <Swiper
                        breakpoints={{
                            340: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            700: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            }
                        }}

                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        modules={[FreeMode, Pagination]}
                    // className='flex w-full justify-center items-center mx-20 m-auto'

                    >
                        {FFoods.map((item, index) => (
                            <SwiperSlide key={index} className='justify-center items-center w-full h-auto md:rounded-l-4xl overflow-hidden cursor-grab'>
                                <div className='w-full h-[100%] justify-center items-center m-auto flex'>
                                    <img src={item.food} className='w-[100%] h-100 md:h-[100vh] object-cover' />
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
