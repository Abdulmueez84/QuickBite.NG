import React from 'react'
import { Mail } from 'lucide-react'

export default function Headline() {
    return (
        <div>
            <nav className='flex flex-wrap sm:1/2 text-center lg:1/3 w-full bg-red-700 justify-between px-10 py-3 '>
                <div className='justify-center max-sm:w-full flex hover:text-amber-500 transition-all duration-500 cursor-pointer'>
                    <p className='text-center'><Mail size={20} strokeWidth={2} /> </p>
                    <p className='items-center font-semibold px-2'>support@gmail.com</p>
                </div>

                <h2 className='max-sm:w-full  text-lg font-semibold px-2'>Discounts up to 10% | Best Price Assurance</h2>

                <h2 className=' max-md:w-full text-center hover:text-amber-500 transition-all duration-500 cursor-pointer font-semibold'>Check The Status Of Your Order</h2>
            </nav>
        </div>
    )
}
