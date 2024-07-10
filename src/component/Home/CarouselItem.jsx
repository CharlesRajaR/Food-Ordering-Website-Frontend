import React from 'react'

const CarouselItem = ({images, title}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={images} alt="food" className='w-[4rem] h-[3rem] md:w-[10rem] md:h-[10rem] rounded-full object-cover object-center'/>
      <span className='py-5 font-semibold text-xs  md:text-lg text-gray-400'>{title}</span>
    </div>
  )
}

export default CarouselItem
