import React from 'react'
import Image from 'next/image'
import style from "./CSS/LcdSections.module.css"
import Link from 'next/link'


const LcdSection = () => {
  return (
    <div className='dark:bg-darkbg grid md:grid-cols-2 justify-center items-center py-12 px-6'>


        <div className=' w-[60%] hidden h-[60%] m-auto md:flex flex-col justify-center gap-y-5' style={{direction:'ltr'}}>
            <h1 className='font-extrabold text-6xl text-bluePrime'>Learn</h1>
            <h1 className='font-extrabold text-6xl text-bluePrime' style={{marginLeft:"54px"}}>Create</h1>
            <h1 className='font-extrabold text-6xl text-bluePrime' style={{marginLeft:"108px"}}>Develop</h1>

                <Link href={'/signup'} className='w-[70%] border-2 border-bluePrime hover:bg-white hover:text-bluePrime duration-150 font-bold bg-gradient-to-l from-bluePrime to-greenPrime hover:from-white hover:to-white rounded-full text-center text-white mx-auto mt-3 px-8 py-4 text-2xl'>
                    سجل الآن
                </Link>
        </div>

       

        <div className={`w-[300px] md:w-[500px] h-[250px] md:h-[400px] block col-span-2 md:col-span-1  ${style.background}`} style={{borderRadius:"32px"}}>
            
        </div>

        <div className=' w-[100%] flex h-[60%] m-auto md:hidden pt-5 flex-col justify-center items-start gap-y-2' style={{direction:'ltr'}}>
            <h1 className='font-extrabold text-2xl text-bluePrime'>Learn</h1>
            <h1 className='font-extrabold text-2xl text-bluePrime' style={{marginLeft:"45px"}}>Create</h1>
            <h1 className='font-extrabold text-2xl text-bluePrime' style={{marginLeft:"82px"}}>Develop</h1>

                <Link href={'/signup'} className='w-[250px] border-2 border-bluePrime hover:bg-white hover:text-bluePrime duration-150 font-bold bg-gradient-to-l from-bluePrime to-greenPrime hover:from-white hover:to-white rounded-full text-center text-white mx-auto mt-3 px-8 py-4 text-xl'>
                    سجل الآن
                </Link>
        </div>

    </div>
  )
}

export default LcdSection
