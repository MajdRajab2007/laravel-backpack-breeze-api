"use client"
import { useDispatch } from "react-redux"
import style from "../style.module.css"
import React, { useState } from 'react'
import back from "../background.jpg"
import { fetchUserData } from "../../../../lib/features/users/users"

const Register = () => {
    let dispatch = useDispatch()
    let [email, setEmail] = useState('')
    console.log(JSON.stringify(back))
  return (
    <div className={`${style.authContainer}  h-[100vh] flex justify-center items-start`}>

            <div className="w-[80%] relative top-[15%] md:top-[10%] md:right-[1%]">
            <form className="flex flex-col gap-5 justify-center items-center
                              border-2   border-bluePrime
                             rounded-2xl py-5 px-8" style={{backgroundColor:"#07afc947"}} method="POST" action="http://localhost:8000/register">

                    <h1 className="text-3xl font-bold ">تسجيل حساب جديد</h1>

                     <div className="flex flex-col md:flex-row gap-5 justify-center items-center text-black text-xl font-bold">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label htmlFor="fName">الاسم</label>
                            <input className="border-2 border-bluePrime rounded-md focus:border-white" type="text" id="fName" name="name" />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label htmlFor="lName">الكنية</label>
                            <input className="border-2 border-bluePrime rounded-md focus:border-white" type="text" id="lName" name="lName" />
                        </div>
                     </div>

                     <div className="flex flex-col md:flex-row gap-5 justify-center items-center text-black text-xl font-bold">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label htmlFor="email">البريد الإلكتروني</label>
                            <input onClick={(e) => setEmail(e.target.value)} className="border-2 border-bluePrime rounded-md focus:border-white" type="text" id="email" name="email" />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label htmlFor="password">كلمة السر</label>
                            <input className="border-2 border-bluePrime rounded-md focus:border-white" type="text" id="password" name="password" />
                        </div>
                     </div>

                     <div className="flex flex-row gap-5 justify-center gap-x-12 w-[100%] items-between text-black text-xl font-bold">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <label htmlFor="gender">الجنس</label>
                            <select className="md:w-[200px]" name="gender" id="gender">
                                <option value="male">ذكر</option>
                                <option value="female">أنثى</option>
                            </select>

                        </div>

                        <div className="flex flex-col justify-center items-start gap-2">
                          <label htmlFor="status">الحالة:</label>
                            <select className="md:w-[200px]" name="status" id="status">
                                <option value="student">طالب</option>
                                <option value="emp">موظف</option>
                            </select>
                        </div>

                     </div>
                     <div className="flex flex-col md:flex-row gap-5 justify-center items-center text-black text-xl font-bold">
                     <div className="flex flex-col justify-center items-start gap-2">
                            <label htmlFor="date">تاريخ الميلاد</label>
                            <input className="border-2 border-bluePrime rounded-md focus:border-white" type="date" id="date" name="date" />
                        </div>
                     </div>

                     <input type="submit" onClick={() => dispatch(fetchUserData(email))} className="mt-5 font-bold mx-auto bg-greenPrime border-greenPrime border-2 rounded-3xl py-2 px-5 text-white" value='تسجيل حساب جديد'  />
                        <div className="flex gap-x-2">
                                هل تملك حساب؟ يمكنك <span className="font-bold">تسجيل الدخول</span>
                        </div>
            </form>
            </div>
    </div>
  )
}

export default Register
