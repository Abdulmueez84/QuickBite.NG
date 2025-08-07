import React from 'react';

function Newsletter() {
    return (
        <div>
            <div className="bg-red-900 p-3 md:p-10 w-ful h-auto">
                <div className="max-sm:flex-col md:flex space-x-6 justify-between items-center m-auto">
                    <div className='text-center py-5 md:text-left'>
                        <h1 className='md:text-4xl text-xl leading-tight font-bold text-white py-3'>Join Our Mailing List</h1>
                        <p className='text-md text-neutral-300'>Ullamcorper malesuada proin libero nunc consequat interdum varius. Magna eget est lorem ipsum dolor.</p>
                    </div>
 
                       <div className='md:w-[50%] '>
                         <form action="" className='w-full'>
                            <div className='flex w-full border border-white rounded-2xl px-2 py-2  items-center'>
                            <input className='border-none text-md w-full text-white' type="email" placeholder='Your email address' required/>
                            <input type="Submit" value='SUBSCRIBE' className='text-md text-white hover:text-black transition-all duration-300 rounded-2xl hover:bg-white font-extrabold leading-tight px-3 py-2'/>
                            </div>
                        </form>

                       </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;