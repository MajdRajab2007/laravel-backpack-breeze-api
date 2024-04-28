import Footer from '@/app/(components)/Footer/Footer';
import Navbar from '@/app/(components)/Navbar/Navbar';
import Link from 'next/link';
import React from 'react'
import { FaPen } from 'react-icons/fa'
import { FaHandHolding, FaLocationDot } from 'react-icons/fa6'
import { ImVideoCamera } from "react-icons/im";


const OurServices = () => {
  return (
   <>
         <div className='dark:bg-darkbg py-6 '>

<div className='my- mx-auto w-[50%] md:w-[20%] rounded-3xl bg-greenPrime py-3 text-center flex gap-x-4 justify-center items-center'>
  <div>
  <h1 className='text-3xl font-bold text-white'>تواصل معنا</h1>
  <h1 className='text-xl text-white'>Contact Us</h1>
  </div>
    <FaHandHolding className='text-white text-2xl'/>
</div>

<div className='py-8 px-6 grid md:grid-cols-4 gap-4 justify-center items-center'>

        <Link href={'/blog'} className='flex leading-[1] flex-col gap-5 justify-center min-h-[350px] items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime
                        hover:bg-white duration-150 hover:text-greenPrime border-2 border-greenPrime hover:from-white hover:to-white text-white'>
            <FaPen className='text-7xl hover:text-greenPrime' />
            <h1 className='text-3xl font-extrabold'>التدوين وكتابة المقالات</h1>
            <h2 className='mt-3 font-bold w-[60%]'>
                تدوين وكتابة مقالات قصيرة تدريبية لتغطية مختلف المهارات والمجالات البرمجية
            </h2>
        </Link>

        <Link href="https://youtube.com/@YouthGuide4U?feature=shared" target="_blank" className='flex leading-[1] flex-col gap-5 justify-center min-h-[350px] items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime
                        hover:bg-white duration-150 hover:text-greenPrime border-2 border-greenPrime hover:from-white hover:to-white text-white'>
            <ImVideoCamera className='text-7xl hover:text-greenPrime' />
            <h1 className='text-3xl font-extrabold'>
                إنتاج الفيديوهات
            </h1>
            <h2 className='mt-3 font-bold w-[50%]'>
                تسجيل الفيدويهات المجانية في مختلف المجالات بشكل مجاني
            </h2>
        </Link>

        <Link href={'/our-services/road-map'} className='flex leading-[1] flex-col gap-5 justify-center min-h-[350px] items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime
                        hover:bg-white duration-150 hover:text-greenPrime border-2 border-greenPrime hover:from-white hover:to-white text-white'>
            <FaLocationDot className='text-7xl hover:text-greenPrime' />
            <h1 className='text-3xl font-extrabold'>
                تقديم خارطة الطريق
            </h1>
            <h2 className='mt-3 font-bold w-[80%]'>
                تقديم خارطة الطريق الصحيح لأكثر من 50 مجال تريد تعلمه كم خلال
                الاعتماد على تقنية الذكاء الصنعي
            </h2>
        </Link >
        <Link href={'/our-services/courses'} className='flex leading-[1] flex-col gap-5 justify-center min-h-[350px] items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime
                        hover:bg-white duration-150 hover:text-greenPrime border-2 border-greenPrime hover:from-white hover:to-white text-white'>
            <FaLocationDot className='text-7xl hover:text-greenPrime' />
            <h1 className='text-3xl font-extrabold'>
                    التدريب المباشر
            </h1>
            <h2 className='mt-3 font-bold w-[60%] text-red-600 text-center'>
                IN PROGRESS
            </h2>
        </Link >

</div>
</div>
   </>
  )
}

export default OurServices
