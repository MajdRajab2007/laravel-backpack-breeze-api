import React from 'react'
import Image from 'next/image'
import image from "./images/image.png"

const Events = () => {
  return (
    <div className='dark:bg-darkbg py-8 px-4'>
      <h1 className='text-5xl font-extrabold text-greenPrime text-center mb-[20px]'>ABC WORKSHOPS</h1>
        <div className=' flex flex-col-reverse md:flex-row justify-center items-center gap-14 '>
            <div className='text-bluePrime font-bold text-2xl text-justify '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque aperiam, amet architecto et, soluta error nesciunt laboriosam, nemo odio dolorem ducimus beatae? Eos ea rerum placeat quasi beatae molestias voluptatum.
            </div>
            <Image src={image} alt={"image"}  className='m-auto w-[250px] md:w-[500px] rounded-lg' />
        </div>
    </div>
  )
}

export default Events
