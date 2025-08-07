import React, { useState } from 'react'
import { productCartegories } from '../content/index';
import { Trash2 } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast';

const Cart = ({ cartAllProducts, setCartAllProducts }) => {


  const handleDecrease = (id) => {
    setCartAllProducts((prevCart) =>
      prevCart.map((list) => list?.id === id && list.count > 1 ? { ...list, count: list?.count - 1 } : list)
    )
  }
  const handleIncrease = (id) => {
    setCartAllProducts((prevCart) =>
      prevCart.map((list) => list?.id === id ? { ...list, count: list?.count + 1 } : list)
    )
  }
  const handleDeleteItem = (id) => {
    const filteredItem = cartAllProducts?.filter((item) => item?.id !== id);
    setCartAllProducts(filteredItem)
  }
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-3">
          {
            cartAllProducts?.map((product) => {
              return (
                <div className="col-8 ">
                  <div key={product.id}>
                    <div className='border my-2 rounded-2xl block  md:flex py-3 relative' >
                      <img src={product.image} className='w-50 object-cover ' />
                      <div className='p-3 w-full'>
                        <p className='text-lg md:text-2xl font-bold'>{product.label}</p>
                        <p >{product.description}</p>
                        <p className='font-bold text-xl'>N {product.price}</p>
                        <div className='flex gap-3'>
                          <p className='m-0 text-lg cursor-pointer font-bold' onClick={() => handleDecrease(product.id)}>-</p>
                          <p className='m-0 text-lg font-bold'>{product?.count}</p>
                          <p className='m-0 text-lg cursor-pointer font-bold' onClick={() => handleIncrease(product.id)}>+</p>
                        </div>
                      </div>
                      <div>
                        <p onClick={() => handleDeleteItem(product.id)} className='text-red-700 px-2 cursor-pointer max-md:absolut top-0 right-0 max-md:py-2'> <Trash2 /></p>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })
          }

          {cartAllProducts.length == 0 && (
            < div className="col-12">
              <h1 className="text-center text-lg md:text-3xl">
                No Products Available in Cart
              </h1>
            </div>
          )}
          {cartAllProducts.length > 0 && (
            <div className="col-12 justify-center m-auto flex ">
              <button disabled className='disable:bg-gray-400 cursor-not-allowed disabled:text-gray-300 bg-opacity-5 px-3 py-3 rounded-2xl text-white text-md bg-red-700'>Place Order</button>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

export default Cart
