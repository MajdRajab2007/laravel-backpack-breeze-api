import React from 'react'
import Link from 'next/link'


const VidAndDes = () => {
  return (
    <div className='dark:bg-darkbg'>

     <div className='dark:bg-darkbg py-6'>

            <div className='my-4 mx-auto w-[50%] md:w-[20%] rounded-3xl bg-greenPrime py-3 text-center'>
            <h1 className='text-2xl font-bold text-white'>أقسام المقالات</h1>
            </div>

     </div>

     <div className="pt-">
     <ul className='grid grid-cols-2 border-2 text-xl border-bluePrime md:grid-cols-3 bg-bluePrime rounded-3xl justify-center w-[90%] m-auto'>
            <Link href={'/blog/'} className='w-[100%] md:rounded-r-3xl duration-150 hover:bg-white hover:text-bluePrime py-3 flex justify-center items-center  px-4 font-bold text-white'>
                البرمجة
            </Link>
            <Link href={'/blog/ve-and-design'} className='w-[100%] bg-white text-bluePrime py-3 flex justify-center items-center px-4  font-bold'>
                التصميم والمونتاج
            </Link>
            <Link href={'/blog/bullhorn'} className='w-[100%] md:rounded-l-3xl duration-150 hover:bg-white hover:text-bluePrime py-3 flex justify-center items-center px-4 font-bold  text-white'>
                التسويق
            </Link>
            {/* <Link href={'/blog/leadership'} className='w-[100%] duration-150 hover:bg-white hover:text-bluePrime py-3 flex justify-center items-center px-4 font-bold  text-white'>
                ريادة الأعمال
            </Link> */}
        </ul>
     </div>

            <div className='mt-8 grid grid-cols-2 justify-center items-center gap-x-4 md:gap-x-0 gap-y-8 px-6'>

                <Link href={"/blog/ve-and-design/graphic-design"} className='mx-auto py-6 px-4 w-[100%] md:w-[60%] lg:w-[40%] h-[100px] flex justify-center items-center text-2xl text-center text-white font-bold
                                 bg-gradient-to-l from-bluePrime to-greenPrime rounded-3xl ' style={{boxShadow:"2px 6px 10px rgba(0, 0, 0, 0.3)"}}>
                                Graphic Design
                </Link>
                <Link href={"/blog/ve-and-design/ui-ux"} className='mx-auto py-6 px-4 w-[100%] md:w-[60%] lg:w-[40%] h-[100px] flex justify-center items-center text-2xl text-center text-white font-bold
                                 bg-gradient-to-l from-bluePrime to-greenPrime rounded-3xl ' style={{boxShadow:"2px 6px 10px rgba(0, 0, 0, 0.3)"}}>
                                UI UX Design
                </Link>
                <Link href={"/blog/ve-and-design/montage"} className='mx-auto py-6 px-4 w-[100%] md:w-[60%] lg:w-[40%] h-[100px] flex justify-center items-center text-2xl text-center text-white font-bold
                                 bg-gradient-to-l from-bluePrime to-greenPrime rounded-3xl ' style={{boxShadow:"2px 6px 10px rgba(0, 0, 0, 0.3)"}}>
                                Montage
                </Link>
                <Link href={"/blog/ve-and-design/motion-graphic"} className='mx-auto py-6 px-4 w-[100%] md:w-[60%] lg:w-[40%] h-[100px] flex justify-center items-center text-2xl text-center text-white font-bold
                                 bg-gradient-to-l from-bluePrime to-greenPrime rounded-3xl ' style={{boxShadow:"2px 6px 10px rgba(0, 0, 0, 0.3)"}}>
                                Motion Graphic
                </Link>

            </div>

    </div>
  )
}

export default VidAndDes
