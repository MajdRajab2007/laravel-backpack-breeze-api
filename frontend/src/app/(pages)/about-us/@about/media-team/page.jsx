import React, { Suspense } from 'react'
import Link from 'next/link'
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'
import { webTeam } from './data';
import { Slide } from 'react-slideshow-image';
import SliderCLi from './SliderCLi'
import Loading from '@/app/loading';



const MediaTeam = () => {
  return (
    <div className='dark:bg-darkbg pt-5'>
        <ul className='grid grid-cols-2 border-2 border-bluePrime md:grid-cols-4 gap-x-6 bg-bluePrime rounded-3xl justify-center w-[70%] m-auto'>
            <Link href={'/about-us/'} className='w-[100%] duration-150 hover:bg-white hover:text-bluePrime text-white py-3 px-4 font-bold'>
                دليل الشباب
            </Link>
            <Link href={'/about-us/web-team'} className='w-[100%] duration-150 hover:bg-white hover:text-bluePrime text-white py-3 px-4  font-bold'>
                فريق الويب
            </Link>
            <Link href={'/about-us/media-team'} className='w-[100%] py-3 text-bluePrime bg-white px-4 font-bold'>
                فريق الإعلامي
            </Link>
            <Link href={'/about-us/org-team'} className='w-[100%] duration-150 hover:bg-white hover:text-bluePrime py-3 text-white px-4 font-bold'>
                فريق التنظيم
            </Link>
        </ul>

      <Suspense fallback={<Loading />}>
      <div className='pt-12 hidden md:block'>
            <SliderCLi >
           {webTeam.map((mem) => {
                return(
                    <div key={mem.id} className='py-4 px-5 flex justify-center items-center flex-col  gap-5 text-bluePrime'>
                            <Image src={mem.img} alt='image' width={250} className='relative bottom-[20px]'/>
                            <div className='border-4 relative border-bluePrime dark:border-white w-[100%] h-[320px] bottom-[250px] flex justify-end items-center flex-col gap-y-5 z-[-1]'>
                            <h1 className='text-4xl text bold text-black dark:text-white'>{mem.name}</h1>
                            <h2 className='text-2xl text bold text-gray-700 dark:text-greenPrime'>{mem.job}</h2>
                            </div>
                    </div>
                )
           })}
           </SliderCLi>
           
        </div>

        <div className='pt-12 md:hidden flex flex-col justify-center items-center gap-y-5'>
        {webTeam.map((mem) => {
                return(
                    <div key={mem.id} className='py-4 px-5 flex justify-center items-center flex-col  gap-2 w-[100%] text-bluePrime'>
                            <Image src={mem.img} alt='image' width={250} className='relative bottom-[20px]'/>
                            <div className='border-4 relative border-bluePrime dark:border-white w-[100%] h-[320px] bottom-[250px] flex justify-end items-center flex-col gap-y-5 z-[-1]'>
                            <h1 className='text-4xl text bold text-black dark:text-white'>{mem.name}</h1>
                            <h2 className='text-2xl text bold text-gray-700 dark:text-greenPrime'>{mem.job}</h2>
                            </div>
                    </div>
                )
           })}
        </div>
      </Suspense>
      
    </div>
  )
}

export default MediaTeam
