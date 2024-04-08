import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import background from "./images/backgroundForProfilePage.jpg"
import profile from "./images/profilePic.png"
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'

const Profile = () => {
  return (
<>
<Navbar />
<div className='dark:bg-darkbg relative '>
        <Image src={background} alt='background' className='top-0 w-[100%]' />
        <div className='flex md:flex-row flex-col-reverse justify-between'>
            <div className='py-3 px-2 w-[100%]'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl dark:text-white font-bold'>
                        المقالات المقروءة
                    </h1>
                    <Link href={'/profile/readings'} className='py-3 px-6 font-bold text-center border-2 border-black rounded-full dark:border-white  dark:text-white'>
                            شاهد الكل
                    </Link>
                </div>

                <div className='grid grid-cols-2 gap-6 mt-4'>

                    {/* Test */}

                    <div className='border-2 border-greenPrime dark:border-white'>
                        <div className='bg-greenPrime font-bold py-2 px-4 text-center text-white'>HTML</div>
                        <div className='text-4xl text-center p-[32px]  dark:text-white'>+7</div>
                        <div className='bg-greenPrime w-[80%] m-auto flex justify-center items-center'>
                            <FaArrowAltCircleRight className='text-2xl text-white'/>
                        </div>
                    </div>

                    {/* Test */}
                    {/* Test */}

                    <div className='border-2 border-greenPrime dark:border-white'>
                        <div className='bg-greenPrime font-bold py-2 px-4 text-center text-white'>HTML</div>
                        <div className='text-4xl text-center p-[32px]  dark:text-white'>+7</div>
                        <div className='bg-greenPrime w-[80%] m-auto flex justify-center items-center'>
                            <FaArrowAltCircleRight className='text-2xl text-white'/>
                        </div>
                    </div>

                    {/* Test */}
                    {/* Test */}

                    <div className='border-2 border-greenPrime dark:border-white'>
                        <div className='bg-greenPrime font-bold py-2 px-4 text-center text-white'>HTML</div>
                        <div className='text-4xl text-center p-[32px]  dark:text-white'>+7</div>
                        <div className='bg-greenPrime w-[80%] m-auto flex justify-center items-center'>
                            <FaArrowAltCircleRight className='text-2xl text-white'/>
                        </div>
                    </div>

                    {/* Test */}
                    {/* Test */}

                    <div className='border-2 border-greenPrime dark:border-white'>
                        <div className='bg-greenPrime font-bold py-2 px-4 text-center text-white'>HTML</div>
                        <div className='text-4xl text-center p-[32px]  dark:text-white' >+7</div>
                        <div className='bg-greenPrime w-[80%] m-auto flex justify-center items-center'>
                            <FaArrowAltCircleRight className='text-2xl text-white'/>
                        </div>
                    </div>

                    {/* Test */}

                </div>
            </div>

            <div className='flex flex-col gap-8 justify-center items-center relative bottom-0 md:bottom-[200px]'>
                    <Image src={profile} alt='profile' />
                    <h1 className='text-4xl font-bold dark:text-white'>
                        سارة غزال
                    </h1>
                    <div className='flex gap-x-4 justify-center items-center' style={{direction:"ltr"}}>
                        <h2 className='text-2xl font-bold dark:text-white'>
                            Email:
                        </h2>
                        <p className='w-[50%]  dark:text-white'>
                            saraghazal963@gmail.com
                        </p>
                    </div>

                    <div className='flex flex-col justify-start items-start px-4' style={{direction:"ltr"}}>
                            <h1 className='text-2xl font-bold dark:text-white'>
                                About:
                            </h1>
                            <p className=' dark:text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum illum dicta cumque nesciunt. Commodi animi eos cum esse repellendus, voluptatum facilis velit possimus harum? Quibusdam, accusamus. Ratione, modi reprehenderit!
                            </p>
                    </div>
            </div>
        </div>
        <Footer fixed="absolute bottom-[-8%] md:bottom-[-2%]"/>
    </div>
</>
  )
}

export default Profile
