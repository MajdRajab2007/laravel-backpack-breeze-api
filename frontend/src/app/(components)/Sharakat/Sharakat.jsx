import React from 'react'
import Image from 'next/image'
import fosha from "./images/fosha.png"
import itc from "./images/itc.png"
import orjwan from "./images/orjwan.png"
const Sharakat = () => {
  return (
    <div className='dark:bg-darkbg py-8 px-4'>
            <h1 className='text-7xl text-greenPrime text-center font-extrabold'>الشراكات</h1>
            <div className='flex md:flex-row justify-center items-center gap-6 md:gap-12 mt-[50px]'>
                <Image src={fosha} alt='fosha' className='w-[100px] md:w-[200px]' />
                <Image src={itc} alt='itc' className='w-[100px] md:w-[200px]' />
                <Image src={orjwan} alt='orjwan' className='w-[100px] md:w-[300px]' />
            </div>
    </div>
  )
}

export default Sharakat
