import React from 'react'
import Link from 'next/link'
import { FaLocationDot, FaPen } from 'react-icons/fa6'
import { ImVideoCamera } from 'react-icons/im'

const About = () => {
  return (
    <div className='dark:bg-darkbg pt-5'>
        <ul className='grid grid-cols-2 border-2 border-bluePrime md:grid-cols-4 gap-x-6 bg-bluePrime rounded-3xl justify-center w-[70%] m-auto'>
            <Link href={'/about-us/'} className='w-[100%] py-3 px-4 text-bluePrime bg-white font-bold'>
                دليل الشباب
            </Link>
            <Link href={'/about-us/web-team'} className='w-[100%] text-white duration-150 hover:bg-white hover:text-bluePrime py-3 px-4  font-bold'>
                فريق الويب
            </Link>
            <Link href={'/about-us/media-team'} className='w-[100%] text-white py-3 px-4 duration-150 hover:bg-white hover:text-bluePrime  font-bold'>
                فريق الإعلامي
            </Link>
            <Link href={'/about-us/org-team'} className='w-[100%] text-white py-3 px-4 duration-150 hover:bg-white hover:text-bluePrime  font-bold'>
                فريق التنظيم
            </Link>
        </ul>

        <div className='pt-12 dark:text-white text-2xl px-8 md:w-[70%] mx-auto'>
            دليل الشباب شركة برمجية ناشئة 
            دليل الشباب شركة برمجية ناشئة 
            دليل الشباب شركة برمجية ناشئة 
            دليل الشباب شركة برمجية ناشئة 
        </div>

        <div className='py-8 px-6 grid md:grid-cols-3 gap-8 justify-center items-center'>

<div className='flex leading-[3] flex-col gap-5 justify-center items-center rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime'>
    <FaPen className='text-7xl text-white' />
    <h1 className='text-white text-3xl font-extrabold'>التدوين وكتابة المقالات</h1>
    <h2 className='mt-3 font-bold'>
        تدوين وكتابة مقالات قصيرة تدريبية لتغطية مختلف المهارات والمجالات البرمجية
    </h2>
</div>

<div className='flex leading-[3] flex-col gap-5 justify-center items-center rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime'>
    <ImVideoCamera className='text-7xl text-white' />
    <h1 className='text-white text-3xl font-extrabold'>
        إنتاج الفيديوهات
    </h1>
    <h2 className='mt-3 font-bold'>
        تسجيل الفيدويهات المجانية في مختلف المجالات بشكل مجاني
    </h2>
</div>

<div className='flex leading-[3] flex-col gap-5 justify-center items-center rounded-3xl py-8 px-5 bg-gradient-to-l from-greenPrime to-bluePrime'>
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
      
    </div>
  )
}

export default About
