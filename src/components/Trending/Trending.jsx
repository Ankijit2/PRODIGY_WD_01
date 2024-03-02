import React from 'react'
import data from '../../assets/data.js'
import Trendingitem from './Trendingitem'

function Trending() {
  return (
    <>
      <h1 className='text-3xl mt-10 font-bold mb-5 ml-10'>Trending Section</h1>
      <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2  place-items-center'>
        {data.map((item, index) => {
          return <Trendingitem key={index} {...item} />;
        })}
      </div>
      <button className='text-white text-center mt-6 block bg-black py-2 px-4 m-auto'>View More</button>
    </>
  )
}

export default Trending