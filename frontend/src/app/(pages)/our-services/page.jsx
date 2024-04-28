import Footer from '@/app/(components)/Footer/Footer';
import Navbar from '@/app/(components)/Navbar/Navbar';
import Link from 'next/link';
import React from 'react'
import { GiPencil } from "react-icons/gi";
import { FaHandHolding, FaLocationDot } from 'react-icons/fa6'
import { BiBookBookmark } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { GiClapperboard } from "react-icons/gi";



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

        <Link href={'/blog'} className='flex leading-[1] flex-col gap-5 justify-center min-h-[380px] items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime
                        hover:bg-white duration-150 hover:text-greenPrime border-2 border-greenPrime hover:from-white hover:to-white text-white'>
            <GiPencil className='text-9xl hover:text-greenPrime' />
            <h1 className='text-2xl font-extrabold w-[100%]'>التدوين وكتابة المقالات</h1>
            <h2 className='mt-3 font-bold text-justify w-[80%]'>
                تدوين وكتابة مقالات قصيرة تدريبية لتغطية مختلف المهارات والمجالات البرمجية
            </h2>
        </Link>

        <Link href="https://youtube.com/@YouthGuide4U?feature=shared" target="_blank" className='flex leading-[1] flex-col gap-5 justify-center min-h-[380px] items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime
                        hover:bg-white duration-150 hover:text-greenPrime border-2 border-greenPrime hover:from-white hover:to-white text-white'>
            <GiClapperboard className='text-8xl hover:text-greenPrime' />
            <h1 className='text-2xl font-extrabold'>
                إنتاج الفيديوهات
            </h1>
            <h2 className='mt-3 font-bold text-justify w-[80%]'>
                تسجيل الفيدويهات المجانية في مختلف المجالات بشكل مجاني
            </h2>
        </Link>

        <Link href={'/our-services/road-map'} className='flex leading-[1] flex-col gap-5 justify-center min-h-[380px] items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime
                        hover:bg-white duration-150 hover:text-greenPrime border-2 border-greenPrime hover:from-white hover:to-white text-white'>
            <GrMapLocation className='text-8xl hover:text-greenPrime' />
            <h1 className='text-2xl font-extrabold'>
                تقديم خارطة الطريق
            </h1>
            <h2 className='mt-3 font-bold text-justify w-[80%]'>
                تقديم خارطة الطريق الصحيح لأكثر من 50 مجال تريد تعلمه كم خلال
                الاعتماد على تقنية الذكاء الصنعي
            </h2>
        </Link >
        <div href={'/our-services/courses'} className='flex leading-[1] flex-col gap-5 justify-center min-h-[380px] items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime
                        hover:bg-white duration-150 hover:text-greenPrime border-2 border-greenPrime hover:from-white hover:to-white text-white'>
            <BiBookBookmark className='text-8xl hover:text-greenPrime' />
            <h1 className='text-2xl font-extrabold'>
                    التدريب المباشر
            </h1>
            <h2 className='mt-3 font-bold text-center w-[80%] text-red-600 '>
                IN PROGRESS
            </h2>
        </div >

</div>
</div>
   </>
  )
}

export default OurServices
