import React from 'react'
import Image from 'next/image'
import style from "./CSS/LcdSections.module.css"
import Link from 'next/link'


const FofMonth = () => {
  return (
    <div className='dark:bg-darkbg flex justify-between items-center  md:py-12 md:px-4'>

            <div className={`w-[40%] md:w-[25%] h-[400px] col-span-2 md:col-span-1  ${style.background}`} style={{borderRadius:"32px"}}>
            
            </div>

        <div className=' w-[60%] h-[60%] mb-auto m-[27px] md:m-auto md:flex flex-col justify-center gap-y-5' >
                <h1 className='font-bold text-xl md:text-4xl text-bluePrime text-center'>رحبوا معنا بمتطوعة الشهر</h1>
                 <h1 className='font-bold text-xl md:text-8xl text-greenPrime text-center'>4</h1>
                <div className='md:w-[50%] border-2 border-bluePrime hover:bg-white hover:text-bluePrime duration-150 font-bold bg-gradient-to-l from-bluePrime to-greenPrime hover:from-white hover:to-white rounded-full text-center text-white mx-auto mt-3 px-8 py-4 text-xl'>
                        مرح عابدين
                </div>
        </div>
       


        
      

       

    </div>
  )
}

export default FofMonth
