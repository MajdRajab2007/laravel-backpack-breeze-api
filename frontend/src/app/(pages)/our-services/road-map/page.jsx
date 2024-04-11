"use client"
import Link from 'next/link'
import React from 'react'

const RoadMap = () => {
  return (
    <div className='dark:bg-darkbg pt-8 pb-12'>
        <div className='my- mx-auto w-[60%] md:w-[30%] rounded-3xl bg-greenPrime py-3 text-center flex gap-x-4 justify-center items-center'>
            <h1 className='text-3xl font-bold text-white'>Self-Roadmap</h1>
        </div>
        <h1 className='mt-5 mb-5 dark:text-white font-bold text-2xl text-center'>
            يوجد في هذا القسم مسارات التعلم لأكثر من 50 مجال
        </h1>
        <form className='w-[50%] mx-auto' onSubmit={() => console.log("done from from")}>
            <input type="search" name="" id=""
            className='border-none bg-bluePrime focus:bg-white
            focus:border-bluePrime text-xl
             w-[100%] h-[38px] text-gray-400 font-bold rounded-2xl'

             placeholder='اكتب اسم المجال الذي تريد تعله'/>
             <input type="submit" className='' placeholder='' value='' />
        </form>

        <div className='mt-8 grid md:grid-cols-2 justify-center items-center gap-10'>

            <Link href={''} className='bg-greenPrime w-[100%] md:w-[80%] m-auto rounded-3xl py-4 px-2 flex justify-center items-center font-bold text-2xl text-white'>
                Back-End
            </Link>
            <Link href={''} className='bg-greenPrime w-[100%] md:w-[80%] m-auto rounded-3xl py-4 px-2 flex justify-center items-center font-bold text-2xl text-white'>
                Front-End
            </Link>
            <Link href={''} className='bg-greenPrime w-[100%] md:w-[80%] m-auto rounded-3xl py-4 px-2 flex justify-center items-center font-bold text-2xl text-white'>
                Data Analysis
            </Link>
            <Link href={''} className='bg-greenPrime w-[100%] md:w-[80%] m-auto rounded-3xl py-4 px-2 flex justify-center items-center font-bold text-2xl text-white'>
                App Development
            </Link>

        </div>

        <div className='w-[30%] mx-auto mt-5 py-2 px-4 bg-bluePrime text-center rounded-3xl text-white font-bold'>
            عرض المزيد
        </div>
    </div>
  )
}

export default RoadMap
