"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import background from "./images/backgroundForProfilePage.png";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Footer from '@/app/(components)/Footer/Footer';
import Navbar from '@/app/(components)/Navbar/Navbar';
import prof from "./images/guest.png";
import { FaPen } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../../../lib/features/users/users';

export default function Profile() {

    let userEmail = null;

    if (typeof window !== 'undefined') {
        let emailItem = sessionStorage.getItem('userEmail');
        userEmail = emailItem;
    }

    let [profileData, setProfileData] = useState("")
    useEffect(() => {
        fetch(`http://localhost:8000/api/users/${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
            setProfileData(data)
            console.log(data)
        })
    }, [userEmail])





    // User data
    // let userData = null;

    // // Check if window is defined (running in the browser)
    // if (typeof window !== 'undefined') {
    //     let user = sessionStorage.getItem('userData');
    //     userData = JSON.parse(user);
    // }

    const name = profileData && profileData.data && profileData.data.name;
    let articlesArray = profileData && profileData.data && profileData.data.read_articles || [""];
    articlesArray.splice(0, 1);
    if (articlesArray !== null) {
        articlesArray.length = 4;
    }

    let dispatch = useDispatch();
    const email = profileData && profileData.data && profileData.data.email || "loading";
    // Update the Image
    let [image, setImage] = useState('');
    const imageProfile = profileData && profileData.data && profileData.data.image || null;

    // Update the Bio
    let [updateBio, setUpdateBio] = useState(false);
    let [bio, setBio] = useState("");
    let handleBio = () => {
        fetch(`http://localhost:8000/api/users/info/${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                about: bio
            }),
        }).then((res) => dispatch(fetchUserData(email)));
    };

    const about = profileData && profileData.data && profileData.data.about || "loading";

    return (
        <>
            <div className='dark:bg-darkbg relative'>
                <Image src={background} alt='background' className='top-0 w-[100%]' />
                <div className='flex md:flex-row flex-col-reverse justify-between'>
                    <div className='py-3 px-2 w-[100%]'>
                        <div className='flex justify-between'>
                            <h1 className='text-3xl dark:text-white font-bold'>
                                المقالات المقروءة
                            </h1>
                            <Link href={'/profile/all-read-articles'} className='py-3 px-6 font-bold text-center border-2 border-black rounded-full dark:border-white  dark:text-white'>
                                شاهد الكل
                            </Link>
                        </div>

                        <div className='grid grid-cols-2 gap-6 mt-4'>
                            {articlesArray != null ? articlesArray.map((item) => {
                                return (
                                    <div key={item?.body?.id} className='border-2 border-greenPrime dark:border-white'>
                                        <div className='bg-greenPrime font-bold py-2 px-4 text-center text-white'>{item?.body?.title}</div>
                                        <div className='text-4xl text-center p-[32px]  dark:text-white'>+7</div>
                                        <Link href={`/lessons/${item?.body?.tag_name}/${item?.body?.id}`} className='bg-greenPrime w-[80%] m-auto flex justify-center items-center'>
                                            <FaArrowAltCircleRight className='text-2xl text-white'/>
                                        </Link>
                                    </div>
                                );
                            }) : articlesArray == null ?  <div className='text-xl mt-3 font-bold'>لم تقم بقراءة أي مقال بعد</div> : <div className='text-xl mt-3 font-bold'>لم تقم بقراءة أي مقال بعد</div>}
                        </div>
                    </div>

                    <div className='flex flex-col gap-8 justify-center items-center relative bottom-0 md:bottom-[150px] w-[100%]'>
                        <form onSubmit={() => dispatch(fetchUserData(email))} action={`http://localhost:8000/api/users/image/${email}`} method='POST' enctype="multipart/form-data" className='absolute left-[5999%]'>
                            <input type="hidden" name="_method" value="PUT"/>
                            <input id='image' onChange={(e) => {
                                setImage(e.target.files[0]);
                            }} type='file' name='image' />
                            <input type="submit" id='sub' />
                        </form>

                        <div className='bottom-[-30px] relative'>
                            <label htmlFor="image" className='text-7xl w-[50px] h-[50px] bg-greenPrime rounded-full flex justify-center items-center cursor-pointer  font-bold text-white top-[70%] absolute'>+</label>
                            <Image priority src={imageProfile !== null ? `http://localhost:8000/storage/storage/${imageProfile}` : prof}  width={250} height={250} className='h-[250px] rounded-full border-2 border-greenPrime' alt='profile' />
                        </div>

                        {image && <div className='flex flex-col mt-6 gap-5'>
                            <label htmlFor='sub'  className='text-white text-4xl bg-bluePrime font-bold flex justify-center items-center w-fit py-2 rounded-3xl cursor-pointer px-6'>تغيير الصورة</label>
                            <div onClick={() => setImage("")} className='text-white text-xl bg-red-600 font-bold flex justify-center items-center w-fit py-2 rounded-3xl cursor-pointer px-6'>إلغاء</div>
                        </div>}

                        <h1 className='text-4xl font-bold mt-5 dark:text-white'>
                            {name}
                        </h1>

                        <div className='flex gap-x-4 justify-center items-center' style={{direction:"ltr"}}>
                            <h2 className='text-2xl font-bold dark:text-white'>
                                Email:
                            </h2>
                            <p className='w-[50%]  dark:text-white'>
                                {email}
                            </p>
                        </div>

                        <div className='flex flex-col justify-start items-start px-4 min-w-[100%]' style={{direction:"ltr"}}>
                            <div className='flex justify-between items-center w-[100%]'>
                                <h1 className='text-2xl font-bold dark:text-white'>
                                    About:
                                </h1>
                                <FaPen className='text-4xl cursor-pointer text-greenPrime' onClick={() => setUpdateBio(!updateBio)}/>
                            </div>

                            {updateBio ?
                                <div>
                                    <textarea onChange={(e) => setBio(e.target.value)} className='border-2 mt-3 focus:border-greenPrime border-greenPrime bg-white text-2xl font-bold' name="" id="" cols="30" rows="10"></textarea>
                                    <div className='flex mt-3 gap-5 justify-center items-center'>
                                        <div onClick={() => setUpdateBio(false)} className='text-white text-xl bg-red-600 font-bold flex justify-center items-center w-fit py-2 rounded-3xl cursor-pointer px-6'>إلغاء</div>
                                        <div onClick={() => {
                                            handleBio();
                                            setUpdateBio(false);
                                        }} className='text-white text-4xl bg-bluePrime font-bold flex justify-center items-center w-fit py-2 rounded-3xl cursor-pointer px-6'>تغيير الوصف</div>
                                    </div>
                                </div>
                                :
                                <p className=' dark:text-white text-xl' style={{direction:"rtl"}}>
                                    {about ? about : "لا يوجد وصف"}
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
