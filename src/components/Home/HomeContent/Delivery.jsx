import React from 'react';
import order1 from '../../../assets/Delivery_icon/Delivery_1.png'
import order2 from '../../../assets/Delivery_icon/Delivery_2.png'
import order3 from '../../../assets/Delivery_icon/Delivery_3.png'

function Delivery() {
    return (
        <div>
            <div className="flex px-10 h-auto justify-center items-center m-auto py-20 bg-neutral-900">
                <div className=" sm:space-x-6 justify-between max-md:flex-wrap md:flex sm:1/3 md:2/3 lg:3/3 m-auto">
                    <div className="py-4 w-full">
                        <img src={order1} className="w-40 justify-center items-center flex m-auto transition-all duration-500 hover:scale-120" />
                        <h1 className='text-2xl font-bold text-center py-2'>Rapid delivery</h1>
                        <p className='sm:px-5 text-center'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est sunt harum tempora dolores temporibus maiores 
                        </p>
                    </div>
                    <div className="py-4 w-full">
                        <img src={order2} className="w-40 justify-center items-center flex m-auto transition-all duration-500 hover:scale-120" />
                        <h1 className='text-2xl font-bold text-center py-2'>Rapid delivery</h1>
                        <p className='sm:px-5 text-center'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est sunt harum tempora dolores temporibus maiores 
                        </p>
                    </div>
                    <div className="py-4 w-full">
                        <img src={order3} className="w-40 justify-center items-center flex m-auto transition-all duration-500 hover:scale-120" />
                        <h1 className='text-2xl font-bold text-center py-2'>Rapid delivery</h1>
                        <p className='sm:px-5 text-center'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est sunt harum tempora dolores temporibus maiores 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Delivery;