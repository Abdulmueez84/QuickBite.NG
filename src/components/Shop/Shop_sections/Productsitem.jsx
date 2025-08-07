import React from 'react';
import { productCartegories } from '../../../content';
import ProductCart from './ProductCart';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'

function Productsitem({ setProductId }) {


    const handleAddToCart = (id) => {
        setProductId(id);
        console.log(id)
    }


    return (
        <div>
            <h1 className='text-3xl my-5'>Products</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {productCartegories.map((item, index) => (
                    // <ProductCart key={index} data={item}/>
                    <div key={index} className='px-5 rounded-xl shadow-sm bg-neutral-800'>
                        <Link to={item.slug}>
                            <img src={item.image} />
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
                                    onClick={() => handleAddToCart(item.id)} className='py-2 px-2 rounded-md hover:text-neutral-800 hover:bg-neutral-100 transition-all duration-500 leading-tight bg-red-700 uppercase font-medium max-sm:text-sm  md:text-sm flex items-center space-x-4'>
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
    );
}

export default Productsitem;