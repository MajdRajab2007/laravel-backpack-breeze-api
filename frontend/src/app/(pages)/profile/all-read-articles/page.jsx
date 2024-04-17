"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Loading from '@/app/loading'


const Profile = () => {
    let userData = null;

        // Check if window is defined (running in the browser)
        if (typeof window !== 'undefined') {
        let user = sessionStorage.getItem('userData');
        userData = JSON.parse(user);
        }
    const name = userData.data.name
    const email = userData.data.email
    let articlesArray = userData?.data?.read_articles
    articlesArray?.splice(0, 1)


  return (<div className='py-6 dark:bg-darkbg min-h-[600px]'>
  <h1 className='text-3xl dark:text-white mr-[30px] text-greenPrime font-bold text-right'>
      المقالات المقروءة
  </h1>

  <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 px-8 '>

      {/* Test */}



      {
                      articlesArray != null ? articlesArray.map((item) => {

                          return (
                              <div key={item?.body?.id} className='border-2 border-greenPrime dark:border-white'>
                              <div className='bg-greenPrime font-bold py-2 px-4 text-center text-white'>{item?.body?.title}</div>
                              <div className='text-4xl text-center p-[32px]  dark:text-white'>+7</div>
                              <Link href={`/lessons/${item?.body?.tag_name}/${item?.body?.id}`} className='bg-greenPrime w-[80%] m-auto flex justify-center items-center'>
                                  <FaArrowAltCircleRight className='text-2xl text-white'/>
                              </Link>
                          </div>
                          )
                      }) : articlesArray == null ?  <div>no data</div> : <div>no data</div>
                  }

      {/* Test */}

  </div>
</div>)
}

export default Profile
