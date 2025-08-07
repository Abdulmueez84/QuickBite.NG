import React from 'react'
import Cart from '../../../content/Cart'
import firetext from '../../../assets/fire.svg'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { foods } from '../../../content/index'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'

import { ArrowBigRight, ArrowBigLeft, ShoppingCart, ShoppingBag} from 'lucide-react'



const Variety = () => {
    return (
        <div className='px-5 md:px-20 h-full bg-neutral-900 py-10 pb-20'>
            <div className='pt-20 pb-10'>
                <h1 className='text-center sm:text-1xl text-xl md:text-2xl font-semibold lg:w-full justify-center  py-5 m-auto item flex bg-image'><img src={firetext} className='lg:w-10 sm:w-5 w-4' /><span className='z-15 items-center justify-center flex  px-3 lg:text-5xl sm:text-3xl text-2xl'>Variety of comforting culinary delights</span><img src={firetext} className='lg:w-10 sm:w-5 w-4' /> </h1>

                <p className='text-neutral-400 text-sm leading-snug tracking-wide text-center items-center flex m-auto md:w-170 text-2xl '>Est ante in nibh mauris cursus mattis molestie a. Sem nulla pharetra diam sit amet nisl. Felis eget nunc lobortis mattis aliquam faucibus purus in. </p>
            </div>


            {/* <Cart /> */}

        

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
                    modules={[FreeMode, Pagination]}
                    className='flex w-full justify-center items-center mx-20 m-auto'

                >
                    {foods.map((item, index) => (
                        <SwiperSlide key={index} className='flex items-center justify-center m-auto'>
                            <div className='justify-center cursor-grab items-center m-auto flex overflow-hidden bg-neutral-800 rounded-3xl  relative'>
                                <a href="#" className='absolute right-0 top-5 bg-red-600 px-2 py-2 rounded-l-2xl hover:text-neutral-800 hover:bg-white transition-all duration-500'> <ShoppingBag /></a>
                                <div className="h-full  justify-center  text-center">
                                    <img className='w-60 pt-5 bg-image object-contain' src={item.image} />
                                    <a href="#" className='text-2xl'>{item.label}</a>
                                    <p className='text-lg'>N{item.price}</p>
                                    <div className='my-5'>
                                        <a href="#" className='py-3 px-3 rounded-md hover:text-neutral-800 hover:bg-neutral-100 transition-all duration-500 leading-tight bg-red-700 uppercase font-extrabold text-lg'>Shop Now</a>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}

export default Variety
