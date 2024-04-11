import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import back from "./images/backend.png"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaIdeal, FaPerson } from 'react-icons/fa6'

const FrontEnd = () => {
  return (
    <div className='dark:bg-darkbg py-6'>

           <Link href={'/our-services/courses'}
                className='bg-greenPrime rounded-3xl
                    flex flex-col justify-center items-center px-8 py-2 text-white
                    font-bold mr-auto mb-6 w-fit'>
                        <FaArrowCircleLeft className='text-2xl'/>
                        <span>Back</span>
            </Link>

            <div className='flex justify-center items-center'>
                <Image src={back} alt='back' className='w-[230px] relative bottom-10 md:w-[500px] h-[230px] md:h-[500px] rounded-full
                                                        border-[10px] md:border-[20px] border-greenPrime' />

                <div className='flex flex-col gap-y-8 justify-center items-center'>

                    <div className='flex flex-col md:gap-y-3 justify-center items-center'>
                        <h1 className='text-4xl md:text-8xl font-bold italic text-bluePrime'>
                            Front-End
                        </h1>
                        <h4 className='text-xl w-[70%] font-bold text-greenPrime' style={{direction:"ltr"}}>
                            Be a Front-End Developer with HTML, CSS and Javascript
                        </h4>
                    </div>

                    <div className='py-3 px-8 text-center bg-greenPrime text-xl md:text-3xl font-bold text-white w-fit'>
                        سجل الآن
                    </div>

                </div>
            </div>

            <div className='mt-6 grid md:grid-cols-3 justify-center items-center gap-5 px-4'>

                <div className='flex flex-col  bg-greenPrime w-[300px] md:w-[70%] md:mx-auto rounded-3xl'>
                        <div className='bg-white rounded-full w-[75px] flex justify-center items-center h-[75px] mx-auto relative bottom-6'>
                            <FaPerson className='text-6xl text-greenPrime' />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-white'>
                            الاشتراك
                        </h1>
                        <div className='h-[80px] md:h-[150px]'>

                        </div>
                </div>

                <div className='flex flex-col  bg-greenPrime w-[300px] md:w-[70%] mx-auto rounded-3xl'>
                        <div className='bg-white rounded-full w-[75px] flex justify-center items-center h-[75px] mx-auto relative bottom-6'>
                            <FaPerson className='text-6xl text-greenPrime' />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-white'>
                            اسم المدرب
                        </h1>
                        <div className='h-[80px] md:h-[150px]'>

                        </div>
                </div>

                <div className='flex flex-col  bg-greenPrime w-[300px] md:w-[70%] mx-auto rounded-3xl'>
                        <div className='bg-white rounded-full w-[75px] flex justify-center items-center h-[75px] mx-auto relative bottom-6'>
                            <FaPerson className='text-6xl text-greenPrime' />
                        </div>
                        <h1 className='text-2xl text-center font-bold text-white'>
                            المحاور
                        </h1>
                        <div className='h-[80px] md:h-[150px]'>

                        </div>
                </div>

            </div>

    </div>
  )
}

export default FrontEnd
