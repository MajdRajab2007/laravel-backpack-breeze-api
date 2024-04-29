import React from 'react'
import lesson from "../lesson.jpg"
import Image from 'next/image'
import Link from 'next/link'
import ReadArticle from '@/app/(pages)/blog/(pages)/(components)/ReadArticle'

const AllContent =async() => {
    let req = await fetch('http://localhost:8000/api/posts/tag/9')
        let res = await req.json()
        let data = res.data

        // //(res)
  return (
    <div className='pt-6 dark:bg-darkbg pb-6 border-b-2  border-greenPrime dark:border-darkbg'>

    <div className='grid md:grid-cols-3 justify-center items-center gap-y-10 '>

         {data.map((lesson) => {
            return (
                <div  key={lesson.id} className='flex flex-col justify-center border-2 bg-white border-bluePrime rounded-2xl  items-center gap-5 w-[70%] mx-auto'>
                        <div className='py-2 px-4 border-b-2 border-bluePrime'>
                        <Image  src={`http://localhost:8000/storage/${lesson.image}`} alt='lesson' width={150} height={350} />
                        </div>
                <div className='dark:text-white flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-bold  text-center py-2 px-6 border-r-2 border-l-2 border-bluePrime rounded-2xl'>
                        {lesson.title}
                    </h1>
                    <h4 className='font-bold text-center mt-3 w-[100%] lg:w-[250px]'>
                        {lesson.review}
                    </h4>
                </div>
                <ReadArticle body={lesson} tag={lesson.tag_name} id={lesson.id} />
        </div>
            )
         })}



    </div>

        <div className='flex justify-center mt-7'>
        <Link href={'/blog/bullhorn/content-writing/'}
            className='w-fit bg-white font-bold border-2 border-greenPrime rounded-3xl
                        py-4 px-8 text-greenPrime text-center mx-auto'>
                   عرض أقل
        </Link>
        </div>

    </div>
  )
}

export default AllContent
