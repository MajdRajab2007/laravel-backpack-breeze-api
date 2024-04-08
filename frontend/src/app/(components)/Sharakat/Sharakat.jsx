import React from 'react'
import Image from 'next/image'
import fosha from "./images/fosha.png"
import itc from "./images/itc.png"
import orjwan from "./images/orjwan.png"
const Sharakat = () => {
  return (
    <div className='dark:bg-darkbg py-8 px-4'>
            <h1 className='text-7xl text-greenPrime text-center font-extrabold'>الشراكات</h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-12 mt-[50px]'>
                <Image src={fosha} alt='fosha' width={150} />
                <Image src={itc} alt='itc' width={150} />
                <Image src={orjwan} alt='orjwan' width={150} />
            </div>
    </div>
  )
}

export default Sharakat
