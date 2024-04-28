"use client"
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaCarTunnel, FaMoneyBillTrendUp, FaShopSlash } from 'react-icons/fa6'
import Link from 'next/link'
import { FaShoppingBag } from 'react-icons/fa'
import { CiCoffeeCup } from 'react-icons/ci'
import { LuMenuSquare } from 'react-icons/lu'
import { GiArabicDoor } from 'react-icons/gi'
import { RiEnglishInput } from 'react-icons/ri'
import Image from 'next/image'
import logo from "./images/logo.png"
import ThemeToggle from './ThemeToggle/ThemeToggle'


const Navbar = () => {
  let [navbar, setNavbar] = useState(false)
  let [scrollMenu, setScrollMenu] = useState(false)
  let router = useRouter()

        // AUTH

        // useEffect(() => {
        //   if( window.location.pathname != '/login') {
        //   router.push('/login')

        // }
        // } ,[])

      return (
        <div className='' style={{height:"90px"}}>
          <nav className={`p-5 transition-all duration-200 bg-gradient-to-l dark:border-b-[1px] dark:border-white from-bluePrime to-greenPrime  dark:from-darkbg dark:to-darkbg shadow lg:flex lg:items-center lg:justify-center gap-x-8 z-10 w-[100%] fixed`}>
         <div className="flex justify-between items-center ">
           <Link href="/" className={`text-2xl ${navbar ?  "text-white" : "text-secondry"} flex justify-center items-center gap- font-semibold font-[Poppins] cursor-pointer`}>

                 <Image src={logo} width={50} height={50} alt='logo' />

           </Link>

           <span className={`text-3xl text-white cursor-pointer mx-2 lg:hidden m-auto block`}
                 onClick={() => {
                   // handle the menu and make it not transparent at the top in small screens when clicked
                   setScrollMenu(!scrollMenu)
                   if (!navbar) {
                     setNavbar(true)
                   }
                 }}
           >

             <LuMenuSquare />
           </span>
         </div>

         <ul className={`  text-white lg:flex text-xl lg:justify-between gap-x-3 lg:items-center z-[-1] lg:z-auto lg:static   w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100  transition-all ease-out duration-500
                 ${scrollMenu ? "opacity-100 top-[100px] static border-b-2 border-white" : "opacity-0 top-[-400px] absolute"}
         `}>

           <li className={`mx-4 my-6 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
             <Link onClick={() => setScrollMenu(false)} href={`/`} className="font-semibold hover:text-3xl dark:hover:text-bluePrime duration-300">
                    الصفحة الرئيسية
             </Link>
           </li>

           <li className={`mx-4 my-6 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
             <Link onClick={() => setScrollMenu(false)} href={`/about-us`} className="font-semibold hover:text-3xl dark:hover:text-bluePrime duration-300">
                    من نحن
             </Link>
           </li>

           <li className={`mx-4 my-6 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
             <Link onClick={() => setScrollMenu(false)} href={`/contact-us`} className="font-semibold hover:text-3xl dark:hover:text-bluePrime duration-300">
                   تواصل معنا
             </Link>
           </li>

           <li className={`mx-4 my-6 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
             <Link onClick={() => setScrollMenu(false)} href={`/blog`} className="font-semibold hover:text-3xl dark:hover:text-bluePrime duration-300">
                  المدونة
             </Link>
           </li>

           <li className={`mx-4 my-6 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
             <Link onClick={() => setScrollMenu(false)} href={`/our-services`} className="font-semibold hover:text-3xl dark:hover:text-bluePrime duration-300">
                  خدماتنا
             </Link>
           </li>

           <li className={`mx-4 my-6 lg:my-0 ${scrollMenu ? "border-b-2 border-white p-4" : ""}`}>
             <Link onClick={() => setScrollMenu(false)} href={`/profile`} className="font-semibold hover:text-3xl dark:hover:text-bluePrime duration-300">
                    الملف الشخصي
             </Link>
           </li>


           <button className=" duration-500 px-6 py-2 mx-4  rounded ">
             <ThemeToggle />
           </button>
     <h2 className=""></h2>
         </ul>
       </nav>
        </div>
       )
}

export default Navbar
