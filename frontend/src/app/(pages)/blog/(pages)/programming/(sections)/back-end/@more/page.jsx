import React from 'react'
import lesson from "./lesson.jpg"
import Image from 'next/image'
import Link from 'next/link'

const MoreMain = async() => {
    let req = await fetch('http://localhost:8000/api/posts/tag/4')
    let res = await req.json()
    let data = res.data
    data.length = 3
    console.log(res)
return (
<div className='mt-6 dark:bg-darkbg pb-6'>

    <div className='grid md:grid-cols-3 justify-center items-center'>

         {data.map((lesson) => {
            return (
                <Link href={`/lessons/${lesson.tag_name}/${lesson.id}`} key={lesson.id} className='flex flex-col justify-center items-center gap-5 w-[70%] mx-auto'>
                <Image src={`http://localhost:8000/storage/${lesson.image}`} alt='lesson' width={200} height={200} />
                <div className='dark:text-white flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-bold'>
                        {lesson.title}
                    </h1>
                    <h4 className='font-bold w-[60%]'>
                        {lesson.review}
                    </h4>
                </div>
        </Link>
            )
         })}



    </div>

        <div className='flex justify-center mt-7'>
        <Link href={'/blog/programming/back-end/all'}
            className='w-fit bg-greenPrime rounded-3xl
                        py-4 px-8 text-white text-center mx-auto'>
                   عرض المزيد
        </Link>
        </div>

    </div>
  )
}

export default MoreMain