import React from 'react'
import Image from 'next/image'
import style from "./CSS/LcdSections.module.css"
import Link from 'next/link'
import melad from "./images/background.png"



const VofMonth = async() => {

        let req = await fetch("http://localhost:8000/api/vof");
        let res = await req.json();
        console.log(res.name)


  return (
    <div className='dark:bg-darkbg flex justify-center items-center py-8 md:py-12 md:pr-60'>

      <div className='w-[50%] md:w-[30%] h-[200px] md:h-[100%] mx-auto  bg-gradient-to-l from-bluePrime to-greenPrime rounded-[40px] md:rounded-3xl flex justify-center items-end'>
        <Image src={`http://localhost:8000/storage/${res.image}`} height={100} alt='...' width={500} />
      </div>

      <div className=' w-[60%] h-[60%] mx-auto md:flex flex-col justify-center items-center gap-y-5' >
        <h1 className='font-bold text-xl md:text-4xl text-bluePrime text-center'>رحبوا معنا بمتطوع الشهر</h1>
        <h1 className='font-bold text-6xl md:text-8xl text-greenPrime text-center'>{res.month}</h1>
        <div className='md:w-[50%] w-[80%] border-2 border-bluePrime hover:bg-white hover:text-bluePrime duration-150 font-bold bg-gradient-to-l from-bluePrime to-greenPrime hover:from-white hover:to-white rounded-full text-center text-white mx-auto mt-3  py-2 text-xl md:text-3xl'>
          {res.name}
        </div>
      </div>

    </div>

  )
}

export default VofMonth

