"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Loading from '@/app/loading';

const Profile = () => {
    let userEmail = null;

    if (typeof window !== 'undefined') {
        let emailItem = sessionStorage.getItem('userEmail');
        userEmail = emailItem;
    }

    let [profileData, setProfileData] = useState("")
    useEffect(() => {
        fetch(`https://api.yg.youth-guide.com/api/users/${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
            setProfileData(data)
            console.log(data)
        })
    }, [userEmail])

    let articlesArray = profileData && profileData.data && profileData.data.read_articles || [""];
    articlesArray.splice(0, 1);


    return (
        <div className='py-6 dark:bg-darkbg min-h-[600px]'>
            <h1 className='text-3xl dark:text-white mr-[30px] text-greenPrime font-bold text-right'>
                المقالات المقروءة
            </h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 px-8 '>
                {articlesArray.length > 0 ? (
                    articlesArray.map((item) => (
                        <div key={item?.id} className='border-2 border-greenPrime dark:border-white'>
                            <div className='bg-greenPrime font-bold py-2 px-4 text-center text-white'>{item?.title}</div>
                            <div className='text-4xl text-center p-[32px]  dark:text-white'>+7</div>
                            <Link href={`/lessons/${item?.tag_name}/${item?.id}`} className='bg-greenPrime w-[80%] m-auto flex justify-center items-center'>
                                <FaArrowAltCircleRight className='text-2xl text-white'/>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div>لم تقم بقراءة أي مقال بعد</div>
                )}
            </div>
        </div>
    );
};

export default Profile;
