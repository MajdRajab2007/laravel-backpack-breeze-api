import React from 'react'
import artc from "./images/artc.png"
import Image from 'next/image'

const LatestArtc = () => {
  return (
    <div className='dark:bg-darkbg flex flex-col gap-y-10 py-8'>
        <h1 className='text-6xl font-extrabold text-greenPrime text-center'>
          أحدث المقالات
        </h1>

        <div className='flex flex-col gap-y-4 justify-center items-center'>
            <Image src={artc} alt='vid1' width={600} />
            <div className='font-bold text-center dark:text-white text-3xl relative flex gap-x-5 '>أساسيات البرمجة_1
            <div className='transform transition-transform duration-500 absolute bg-greenPrime w-6 h-6 rounded-full right-[-15%] top-[15%]'></div>
            </div>
            <div className='text-4xl dark:text-white text-center'>
            
              <div>تعلم أساسيات البرمجة بالاعتماد على لغة <span style={{direction:"ltr"}}>C++</span></div>
            </div>
        </div>



    </div>
  )
}

export default LatestArtc
