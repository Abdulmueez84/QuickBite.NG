
import React from 'react'
import Hero from './Shop_sections/Hero'
// import { Route, Routes } from 'react-router-dom'
import { productCartegories } from '../../content/index';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast';

function Shop({ setProductId }) {
  const handleAddToCart = (id) => {
    setProductId(id);

    toast.success("Product Added successfully")
  }


  return (
    <div>
      <Hero />
      <div className='px-6 sm:px-12'>
        <h1 className='text-3xl my-5'>Foods Available</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          <Toaster />
          {productCartegories.map((item, index) => (
            // <ProductCart key={index} data={item}/>
            <div key={index} className='px-5 rounded-xl shadow-sm bg-neutral-800 justify-center items-centerx'>
              <Link className='w-full flex justify-center items-center'>
                <img src={item.image} alt='image' className='rounded-full object-cover w-50 h-50 ' />
              </Link>
              <h3 className='text-2xl py-3 text-center font-medium'>
                {item.label}
              </h3>
              <div className="flex justify-between items-center">
                <p>
                  <span className='text-2xl font-medium'>N{item.price}</span>
                </p>
                <div className='my-5'>
                  <button 
                    onClick={() => handleAddToCart(item.id)} className='py-2 cursor-pointer px-2 rounded-md hover:text-neutral-800 hover:bg-neutral-100 transition-all duration-500 leading-tight bg-red-700 uppercase font-medium max-sm:text-sm  md:text-sm flex items-center space-x-4'>
                    <span className='px-2'>
                      <ShoppingCart size={15} strokeWidth={2} />
                    </span>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;