import React from 'react'
import vid1 from "./images/vid1.png"
import vid2 from "./images/vid2.png"
import Image from 'next/image'

const LatestVid = () => {
  return (
    <div className='dark:bg-darkbg flex flex-col gap-y-10 py-8'>
        <h1 className='text-6xl font-extrabold text-greenPrime text-center'>
          أحدث الفيديوهات
        </h1>

        <div className='flex flex-col gap-y-4 justify-center items-center'>
            <Image src={vid1} alt='vid1' width={600} />
            <h1 className='text-4xl dark:text-white'>تعلم أكثر  من while مع</h1>
            <h1 className='font-bold dark:text-white text-3xl'>سنا طبة</h1>
        </div>

        <div className='flex flex-col gap-y-4 justify-center items-center'>
            <Image src={vid2} alt='vid1' width={600} />
            <h1 className='text-4xl dark:text-white'>تعلم أكثر من لغة html مع</h1>
            <h1 className='font-bold dark:text-white text-3xl'>ميلاد فيوض</h1>
        </div>


    </div>
  )
}

export default LatestVid
