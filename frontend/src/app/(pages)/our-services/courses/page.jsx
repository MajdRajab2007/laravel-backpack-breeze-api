import Link from 'next/link'
import React from 'react'
import back from './images/back.png'
import backend from './images/backend.png'
import { FaArrowCircleLeft } from 'react-icons/fa'
import Image from 'next/image'

const Courses = () => {
  return (
    <div className='dark:bg-darkbg py-6'>
        <Link href={'/our-services/'}
         className='bg-greenPrime rounded-3xl
                    flex flex-col justify-center items-center px-8 py-2 text-white
                    font-bold mr-auto mb-6 w-fit'>
                        <FaArrowCircleLeft className='text-2xl'/>
                        <span>Back</span>
                    </Link>
        <Image src={back} alt={'backgroundPhoto'} className='w-[100%]'/>
        <div className='mt-4'>

            <h1 className='text-4xl font-bold text-greenPrime mr-[14%]'>مجالاتنا</h1>

            <div className='w-[50%] flex gap-x-7 mr-[8%] mt-6'>
                <div className='bg-greenPrime p-4 flex justify-center items-center font-bold text-2xl text-white'>
                        المونتاج
                </div>
                <div className='bg-greenPrime p-4 flex justify-center items-center font-bold text-2xl text-white'>
                        التصميم
                </div>
                <div className='bg-greenPrime p-4 flex justify-center items-center font-bold text-2xl text-white'>
                        البرمجة
                </div>
            </div>

            <h1 className='text-4xl font-bold text-greenPrime mr-[10%] mt-8'>الكورسات المقترحة</h1>

            <div className='mt-5 grid md:grid-cols-3 gap-4 justify-center items-center'>

                <div className='flex flex-col w-[80%] mx-auto gap-4 justify-center items-center bg-greenPrime py-4 px-3 rounded-2xl'>
                    <Image src={backend} alt='backend' width={200} className='rounded-3xl'/>
                    <h1 className='text-3xl text-white text-center font-bold'>
                        Back-End
                    </h1>
                    <div className='text-xl text-white text-center font-semibold w-[70%]'>
                        bla bla bla bla bla bla bla bla bla bla bla bla
                    </div>
                </div>

                <Link href={'/our-services/courses/front-end'} className='flex flex-col w-[80%] mx-auto gap-4 justify-center items-center bg-greenPrime py-4 px-3 rounded-2xl'>
                    <Image src={backend} alt='backend' width={200} className='rounded-3xl'/>
                    <h1 className='text-3xl text-white text-center font-bold'>
                        Front-End
                    </h1>
                    <div className='text-xl text-white text-center font-semibold w-[70%]'>
                        bla bla bla bla bla bla bla bla bla bla bla bla
                    </div>
                </Link>

                <div className='flex flex-col w-[80%] mx-auto gap-4 justify-center items-center bg-greenPrime py-4 px-3 rounded-2xl'>
                    <Image src={backend} alt='backend' width={200} className='rounded-3xl'/>
                    <h1 className='text-3xl text-white text-center font-bold'>
                        Back-End
                    </h1>
                    <div className='text-xl text-white text-center font-semibold w-[70%]'>
                        bla bla bla bla bla bla bla bla bla bla bla bla
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Courses
