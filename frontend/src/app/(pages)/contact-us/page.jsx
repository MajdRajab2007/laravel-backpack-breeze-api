import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLocationArrow, FaLocationDot, FaPhone, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { GiMailbox } from 'react-icons/gi'

export const metadata = {
    title:"تواصل معنا - دليل الشباب",
    description:"من خلال صفحة تواصل معنا يمكنك الاطلاع على طرق التواصل مع ادارة فريق دليل الشباب او متابعة اخر اخبار الفريق على منصات التواصل الاجتماعي."
}

const ContactUs = () => {
  return (
   <>
   <Navbar />
     <div className='dark:bg-darkbg py-6'>
        <div className='my-4 mx-auto w-[50%] md:w-[20%] rounded-3xl  bg-gradient-to-l from-greenPrime to-bluePrime py-3 text-center'>
          <h1 className='text-3xl font-bold text-white'>تواصل معنا</h1>
          <h1 className='text-xl text-white'>Contact Us</h1>
        </div>

        <div className='mx-auto md:w-[35%] rounded-3xl text-white bg-gradient-to-l from-greenPrime to-bluePrime py-8 px-6 flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col gap-6 border-r-2 border-l-2 px-6'>
                <div className='flex gap-x-3 mx-auto w-[200px]'><FaLocationDot className='text-2xl' /> سوريا-اللاذقية</div>
                <div className='flex gap-x-3 mx-auto w-[200px]'><GiMailbox className='text-2xl' /> info@youth-guide.com</div>
                <div className='flex gap-x-3 mx-auto w-[200px]'><FaWhatsapp className='text-2xl'/> +963937088453</div>
                <div className='flex gap-x-3 mx-auto w-[200px]'><FaPhone className='text-2xl'/> +963937088453</div>
            </div>
        </div>

        <div>
          <h1 className='mt-4 text-2xl font-bold text-center dark:text-white'>تابعنا على منصات التواصل الاجتماعي</h1>
          <div className='flex gap-5 mt-3 justify-center items-center text-3xl'>
            <Link href="https://www.instagram.com/youthguideoffical?igsh=MTB0OGJoc3Bqamtydw==" target="_blank"><FaInstagram  className=' text-purple-700'/></Link>
            <Link href="https://www.facebook.com/YouthGuide1" target="_blank"><FaFacebook  className='text-blue-600'/></Link>
            <Link href="https://t.me/youthguidechannel" target="_blank"><FaTelegram  className='text-blue-600'/></Link>
            <Link href="https://youtube.com/@YouthGuide4U?feature=shared" target="_blank"> <FaYoutube  className='text-red-600'/></Link>
          </div>
        </div>
        <Footer fixed="fixed"/>
    </div>
   </>
  )
}

export default ContactUs
