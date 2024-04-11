"use client"
import style from "../style.module.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from "../../../../lib/features/users/users";


const Login = () => {
    let dispatch = useDispatch()
    let select = useSelector((state) => state.users)

    let [email, setEmail] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchUserData(email));
        console.log(email)

      };
  return (
    <div className={`${style.authContainer}  h-[100vh] flex justify-center items-start`}>

            <div className="w-[80%] md:w-[50%] relative top-[15%] md:top-[10%] md:right-[1%]">
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-5 justify-center items-center
                              border-2   border-bluePrime
                             rounded-2xl py-5 px-8" style={{backgroundColor:"#07afc947"}}>

                    <h1 className="text-3xl font-bold ">تسجيل الدخول</h1>

                     <div className=" md:flex-row gap-5 justify-center items-center text-black text-xl font-bold">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label htmlFor="email">البريد الإلكتروني</label>
                            <input onChange={(e) => setEmail(e.target.value)} className="border-2 border-bluePrime rounded-md focus:border-white" type="text" id="email" name="email" />
                        </div>
                        <div className="flex flex-col mt-5 justify-center items-start gap-2">
                            <label htmlFor="password" onClick={() => console.log(select)}>كلمة السر</label>
                            <input className="border-2 border-bluePrime rounded-md focus:border-white" type="text" id="password" name="password" />
                        </div>
                     </div>

                     <input type="submit" className="mt-5 font-bold mx-auto bg-greenPrime border-greenPrime border-2 rounded-3xl py-2 px-5 text-white" value='تسجيل الدخول'  />
                        <div className="flex flex-col gap-x-2 justify-center items-center">
                                لا تمتلك حساب؟ يمكنك <span className="font-bold">تسجيل حساب جديد</span>
                        </div>
            </form>
            </div>
    </div>
  )
}

export default Login
