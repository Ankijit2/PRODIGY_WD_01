import React from 'react'

function Slogan() {
  return (
    <div className='relative lg:ml-10 grid lg:grid-cols-[1fr,3fr] place-items-center '>
      <div id="slogantxt" className='flex flex-col justify-center lg:order-none order-2'>
        <div className='bg-[#F4E3D2] p-16 lg:absolute left-0 lg:w-2/4'>
          <div className=''>
            <h1 className='md:text-5xl sm:text-3xl text-2xl md:my-8 sm:my-4 my-2 font-bold'>When fashion meets Cheap Prices</h1>
            <p>Explore different trending fashion outfits at affordable and cheap prices that is light for your pocketWhen Fashion Meets Cheap Prices</p>
          </div>
          <button className='text-white mt-6  bg-black py-2 px-4 w-fit'>Shop Now</button>
        </div>
      </div>
      <div id="img" className=''><img src="./background.png" alt=""  className='lg:w-[98%]'/></div>
    </div>
  )
}

export default Slogan