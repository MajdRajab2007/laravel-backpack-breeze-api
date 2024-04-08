import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLocationArrow, FaLocationDot, FaPhone, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { GiMailbox } from 'react-icons/gi'

const ContactUs = () => {
  return (
   <>
   <Navbar />
     <div className='dark:bg-darkbg py-6'>
        <div className='my-4 mx-auto w-[50%] md:w-[20%] rounded-3xl bg-greenPrime py-3 text-center'>
          <h1 className='text-3xl font-bold text-white'>تواصل معنا</h1>
          <h1 className='text-xl text-white'>Contact Us</h1>
        </div>

        <div className='mx-auto md:w-[35%] rounded-3xl text-white bg-gradient-to-l from-greenPrime to-bluePrime py-8 px-6 flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col gap-6'>
                <div className='flex gap-x-3 mx-auto w-[200px]'><FaLocationDot className='text-xl' /> سوريا-اللاذقية</div>
                <div className='flex gap-x-3 mx-auto w-[200px]'><GiMailbox className='text-xl' /> info@youth-guide.com</div>
                <div className='flex gap-x-3 mx-auto w-[200px]'><FaWhatsapp className='text-xl'/> +963937088453</div>
                <div className='flex gap-x-3 mx-auto w-[200px]'><FaPhone className='text-xl'/> +963937088453</div>
            </div>
        </div>

        <div>
          <h1 className='mt-4 text-2xl font-bold text-center dark:text-white'>أو عبر منصات التواصل الاجتماعي</h1>
          <div className='flex gap-5 mt-3 justify-center items-center text-3xl'>
            <FaInstagram className=' text-purple-700'/>
            <FaFacebook className='text-blue-600'/>
            <FaTelegram className='text-blue-600'/>
            <FaYoutube className='text-red-600'/>
          </div>
        </div>
        <Footer fixed="fixed"/>
    </div>
   </>
  )
}

export default ContactUs
