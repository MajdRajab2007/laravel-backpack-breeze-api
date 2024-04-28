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
                <Image src={fosha} alt='fosha' width={100} />
                <Image src={itc} alt='itc' width={100} />
                <Image src={orjwan} alt='orjwan' width={100} />
            </div>
    </div>
  )
}

export default Sharakat
