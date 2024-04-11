import React from 'react'
import lesson from "./lesson.jpg"
import Image from 'next/image'
import Link from 'next/link'

const MoreMain = () => {
  return (
    <div className='mt-6 dark:bg-darkbg'>

        <div className='grid grid-cols-3 justify-center items-center'>

                <div className='flex flex-col justify-center items-center gap-5 w-[70%] mx-auto'>
                        <Image src={lesson} alt='lesson' width={200} />
                        <div className='dark:text-white flex flex-col justify-center items-center'>
                            <h1 className='text-2xl font-bold'>
                                تعلم أساسيات البرمجة
                            </h1>
                            <h4 className='font-bold w-[60%]'>
                                في هذا الدرس سنقوم بشرح كيفية تعلم أساسيات البرمجة
                            </h4>
                        </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-5 w-[70%] mx-auto'>
                        <Image src={lesson} alt='lesson' width={200} />
                        <div className='dark:text-white flex flex-col justify-center items-center'>
                            <h1 className='text-2xl font-bold'>
                                تعلم أساسيات البرمجة
                            </h1>
                            <h4 className='font-bold w-[60%]'>
                                في هذا الدرس سنقوم بشرح كيفية تعلم أساسيات البرمجة
                            </h4>
                        </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-5 w-[70%] mx-auto'>
                        <Image src={lesson} alt='lesson' width={200} />
                        <div className='dark:text-white flex flex-col justify-center items-center'>
                            <h1 className='text-2xl font-bold'>
                                تعلم أساسيات البرمجة
                            </h1>
                            <h4 className='font-bold w-[60%]'>
                                في هذا الدرس سنقوم بشرح كيفية تعلم أساسيات البرمجة
                            </h4>
                        </div>
                </div>

        </div>

        <Link href={'/blog/programming/front-end/all'}
            className='w-[30%] bg-greenPrime rounded-3xl
                        py-2 px-4 text-white text-center'>
                   عرض المزيد
        </Link>

    </div>
  )
}

export default MoreMain
