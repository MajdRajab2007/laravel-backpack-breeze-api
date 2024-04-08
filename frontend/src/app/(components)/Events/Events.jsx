import React from 'react'
import Image from 'next/image'
import image from "./images/image.png"

const Events = () => {
  return (
    <div className='dark:bg-darkbg py-8 px-4'>
      <h1 className='text-5xl font-extrabold text-greenPrime text-center mb-[20px]'>ABC WORKSHOPS</h1>
      <Image src={image} alt={"image"} width={500} className='mr-auto rounded-lg' />
    </div>
  )
}

export default Events
