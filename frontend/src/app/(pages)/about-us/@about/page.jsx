import React from 'react'
import Link from 'next/link'
import { FaLocationDot, FaPen } from 'react-icons/fa6'
import { ImVideoCamera } from 'react-icons/im'
import roadmap from "./images/roadmap.png"
import Image from 'next/image'
import logo from './images/logo.png'
import { GiPencil } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { GiClapperboard } from "react-icons/gi";


const About = () => {
  return (
    <div className='dark:bg-darkbg pt-5'>
        <ul className='grid text-xl grid-cols-2 border-2 border-bluePrime md:flex bg-bluePrime rounded-3xl justify-center w-[80%] m-auto'>

             <Image src={logo} width={50} height={50} alt='logo' className='p-1 mx-auto' />

            <Link href={'/about-us/'} className='w-[100%] flex justify-center items-center py-3 px-4 text-bluePrime bg-white font-bold'>
                دليل الشباب
            </Link>
            <Link href={'/about-us/web-team'} className='w-[100%] flex justify-center items-center text-white duration-150 hover:bg-white hover:text-bluePrime py-3 px-4  font-bold'>
                فريق الويب
            </Link>
            <Link href={'/about-us/media-team'} className='w-[100%] flex justify-center items-center text-white py-3 px-4 duration-150 hover:bg-white hover:text-bluePrime  font-bold'>
                فريق الإعلامي
            </Link>
            <Link href={'/about-us/org-team'} className='w-[100%] flex justify-center items-center md:rounded-l-3xl text-white py-3 px-4 duration-150 hover:bg-white hover:text-bluePrime  font-bold'>
                فريق التنظيم
            </Link>
        </ul>

        <div className='pt-12 dark:text-white font-bold text-2xl px-8 md:w-[70%] mx-auto'>
            دليل الشباب شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عند اليافعين على مبدأ تدريب اليافعين باليافعين أنفسهم
        </div>

        <div className='py-8 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center'>

<div className='flex leading-[3] flex-col min-h-[400px] gap-5 justify-center items-center rounded-[70px] py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime'>
    {/* <FaPen className='text-7xl text-white' /> */}
    <GiPencil  className='text-9xl text-white'/>
    <h1 className='text-white text-2xl font-extrabold'>التدوين وكتابة المقالات</h1>
    <h2 className='mt-3 font-bold text-xl text-justify text-white'>
    نقدم في دليل الشباب مقالات قصيرة نوعية تناسب فئة اليافعين وتسهم في رفع ثقافتهم التقنية

</h2>
</div>

<div className='flex leading-[3] flex-col min-h-[400px] gap-5 justify-center items-center rounded-[70px] py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime'>
    <GiClapperboard className='text-9xl text-white' />
    <h1 className='text-white text-2xl font-extrabold'>
        إنتاج الفيديوهات
    </h1>
    <h2 className='mt-3 font-bold text-xl text-justify text-white'>
    نقدم في دليل الشباب بتقديم دورات تدريبية مجانية باللغة العربية حصريا عبر قناتنا على اليوتيوب
     </h2>
</div>

<div className='flex leading-[3] flex-col min-h-[400px] gap-5 justify-center items-center rounded-[70px] py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime'>
    <GrMapLocation className='text-9xl text-white' />
    <h1 className='text-white text-2xl font-extrabold'>
        تقديم خارطة الطريق
    </h1>
    <h2 className='mt-3 font-bold text-xl text-justify text-white'>
    نقدم في دليل الشباب خدمة خارطة الطريق لأكثر من 50 مسار تقني تعليمي وبشكل حصري عبر موقعنا
    </h2>
</div>

</div>

    </div>
  )
}

export default About
