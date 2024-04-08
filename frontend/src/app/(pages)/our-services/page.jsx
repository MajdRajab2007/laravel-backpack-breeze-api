import Footer from '@/app/(components)/Footer/Footer';
import Navbar from '@/app/(components)/Navbar/Navbar';
import React from 'react'
import { FaPen } from 'react-icons/fa'
import { FaHandHolding, FaLocationDot } from 'react-icons/fa6'
import { ImVideoCamera } from "react-icons/im";


const OurServices = () => {
  return (
   <>
   <Navbar />
         <div className='dark:bg-darkbg py-6 '>

<div className='my- mx-auto w-[50%] md:w-[20%] rounded-3xl bg-greenPrime py-3 text-center flex gap-x-4 justify-center items-center'>
  <div>
  <h1 className='text-3xl font-bold text-white'>تواصل معنا</h1>
  <h1 className='text-xl text-white'>Contact Us</h1>
  </div>
    <FaHandHolding className='text-white text-2xl'/>
</div>

<div className='py-8 px-6 grid md:grid-cols-3 gap-8 justify-center items-center'>

        <div className='flex leading-[3] flex-col gap-5 justify-center items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime'>
            <FaPen className='text-7xl text-white' />
            <h1 className='text-white text-3xl font-extrabold'>التدوين وكتابة المقالات</h1>
            <h2 className='mt-3 font-bold'>
                تدوين وكتابة مقالات قصيرة تدريبية لتغطية مختلف المهارات والمجالات البرمجية
            </h2>
        </div>

        <div className='flex leading-[3] flex-col gap-5 justify-center items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime'>
            <ImVideoCamera className='text-7xl text-white' />
            <h1 className='text-white text-3xl font-extrabold'>
                إنتاج الفيديوهات
            </h1>
            <h2 className='mt-3 font-bold'>
                تسجيل الفيدويهات المجانية في مختلف المجالات بشكل مجاني
            </h2>
        </div>

        <div className='flex leading-[3] flex-col gap-5 justify-center items-center  rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime'>
            <FaLocationDot className='text-7xl text-white' />
            <h1 className='text-white text-3xl font-extrabold'>
                تقديم خارطة الطريق
            </h1>
            <h2 className='mt-3 font-bold'>
                تقديم خارطة الطريق الصحيح لأكثر من 50 مجال تريد تعلمه كم خلال
                الاعتماد على تقنية الذكاء الصنعي
            </h2>
        </div>

</div>
<Footer fixed="absolute bottom-[-57%] md:bottom-[-27%]"/>
</div>
   </>
  ) 
}

export default OurServices
