import React from 'react'
import textlogo1 from '../../../assets/Other_logo/text_img_1.png'
import textlogo2 from '../../../assets/Other_logo/text_img_2.png'
import textlogo3 from '../../../assets/Other_logo/text_img_3.png'
import CountUp from 'react-countup'

export default function Aroma() {
    return (
        <div>
            <div className=' px-4 sm:px-10 py-10 items-center justify-center flex flex-col m-auto'>
                <div className='pb-10 justify-center items-center flex flex-col m-auto'>
                    <div className="text-white text-2xl md:text-5xl text-capitalized justify-center items-center leading-relaxed font-bold space-y-2 text-center py-10">
                        <div className="justify-center items-center flex flex-wrap gap-2">
                            <span>The Aroma of Freshly Baked Bread</span>
                            <img src={textlogo1} className='w-25 h-auto rounded-full' />
                            {/* baked bread</span> */}
                            <span>Filled The Cozy Restaurant As Patrons Eagerly </span>
                            <img src={textlogo2} className='w-25 h-10 rounded-full' />
                            <span>Awaited Their Gourmet Meals</span>
                            <img src={textlogo3} className='w-25 h-10 rounded-full' />
                            <span> Here.</span>
                        </div>
                    </div>
 
                    <div>
                        <a href="#" className='py-4 px-5 rounded-md hover:text-neutral-800 hover:bg-neutral-100 transition-all duration-500 leading-tight bg-red-700 uppercase font-extrabold text-md'>Shop Now</a>
                    </div>
                </div>



                <div className='md:flex px-10'>

                    <CountUp
                        start={2}
                        end={3}
                        duration={4}
                        separator=" "
                        decimals={0}
                        decimal=""
                        suffix="K Global Restaurant Franchise"
                    >
                        {({ countUpRef }) => (

                            <div className='px-7 py-2 text-xl sm:text-3xl items-center justify-center text-center md:block lg:flex'>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>

                    <CountUp
                        start={5}
                        end={7}
                        duration={4}
                        separator=" "
                        decimals={0}
                        decimal=""
                        suffix="+ Years In The Field"
                    >
                        {({ countUpRef }) => (
                            <div className='px-7 py-2 text-xl sm:text-3xl items-center justify-center text-center md:block lg:flex'>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>

                    <CountUp
                        start={2}
                        end={3}
                        duration={4}
                        separator=" "
                        decimals={0}
                        decimal=""
                        suffix="K Happy Clients"
                    >
                        {({ countUpRef }) => (
                            <div className='px-7 py-2 text-xl sm:text-3xl items-center justify-center text-center md:block lg:flex'>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>

                    <CountUp
                        start={100}
                        end={100}
                        duration={4}
                        separator=" "
                        decimals={0}
                        decimal=""
                        suffix=" Delicious Dishes "
                    >
                        {({ countUpRef }) => (
                            <div className='px-7 py-2 text-xl sm:text-3xl items-center justify-center text-center md:block lg:flex'>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
    )
}
