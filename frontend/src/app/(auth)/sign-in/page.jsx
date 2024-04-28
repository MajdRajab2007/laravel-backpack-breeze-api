"use client"
import style from "../style.module.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from "../../../../lib/features/users/users";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const Login = () => {
    let dispatch = useDispatch()
    let select = useSelector((state) => state.users)
    let [password, setPassword] = useState(false)

    let [email, setEmail] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

        // //(email)

      };
  return (
    <div className={`${style.authContainer}  h-[100vh] flex justify-center items-start`}>

            <div className="w-[80%] md:w-[50%] relative top-[15%] md:top-[10%] md:right-[1%]">
            <form action="http://localhost:8000/login" method="POST"
                    className="flex flex-col gap-5 justify-center items-center
                              border-2   border-bluePrime
                             rounded-2xl py-5 px-8" style={{backgroundColor:"#07afc947"}}>

                    <h1 className="text-3xl font-bold ">تسجيل الدخول</h1>

                     <div className=" md:flex-row gap-5 justify-center items-center text-black text-xl font-bold">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label htmlFor="email">البريد الإلكتروني</label>
                            <input onChange={(e) => setEmail(e.target.value)} required className="border-2 border-bluePrime rounded-md focus:border-white" type="text" id="email" name="email" />
                        </div>
                        <div className="flex flex-col mt-5 justify-center items-start gap-2">
                            <label htmlFor="password">كلمة السر</label>
                            <input required type={password ? 'text' : 'password'}  className="border-2 border-bluePrime rounded-md focus:border-white"  id="password" name="password" />
                        </div>
                        <div className="mt-2 flex justify-center items-center">
                        {password ?  <FaEyeSlash onClick={() => setPassword(false)}  className="text-bluePrime cursor-pointer"/> : <FaEye onClick={() => setPassword(true)}  className="text-bluePrime cursor-pointer"/> }

                        </div>
                     </div>

                     <input onClick={() => dispatch(fetchUserData(email))} type="submit" className="mt-5 font-bold mx-auto bg-greenPrime border-greenPrime border-2 rounded-3xl py-2 px-5 text-white" value='تسجيل الدخول'  />
                        <div className="flex flex-col gap-x-2 justify-center items-center">
                                لا تمتلك حساب؟ يمكنك <Link href={'/sign-up'} className="font-bold">تسجيل حساب جديد</Link>
                        </div>
            </form>
            </div>
    </div>
  )
}

export default Login
