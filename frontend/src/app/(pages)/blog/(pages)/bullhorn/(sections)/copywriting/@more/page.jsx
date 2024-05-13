import React from 'react'
import lesson from "./lesson.jpg"
import Image from 'next/image'
import Link from 'next/link'
import ReadArticle from '../../../../(components)/ReadArticle'

const MoreMain = async() => {
    let req = await fetch('https://api.yg.youth-guide.com/api/posts/tag/10')
    let res = await req.json()
    let data = res.data
            let allArticles = data.length;
        data.length = 3
    // //(res)
return (
    <div className='pt-6 dark:bg-darkbg pb-6 border-b-2  border-greenPrime dark:border-darkbg'>

    <div className='grid md:grid-cols-3 justify-center items-center gap-10 md:gap-0 px-6 '>

         {data.map((lesson) => {
            return (
                <div  key={lesson.id} className='flex flex-col justify-center border-2 bg-white border-bluePrime rounded-2xl  items-center gap-5 lg:w-[80%] w-[100%] mx-auto'>
                        <div className='py-2 px-4 border-b-2 border-bluePrime'>
                        <Image  src={`https://api.yg.youth-guide.com/storage/${lesson.image}`} alt='lesson' width={150} height={350} />
                        </div>
                <div className=' flex flex-col justify-center items-center'>
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

         {
              allArticles >= 4 && (
                <div className='flex justify-center mt-7'>
                <Link href={'/blog/bullhorn/copywriting/all'}
                    className='w-fit bg-greenPrime rounded-3xl
                                py-4 px-8 text-white text-center mx-auto'>
                           عرض المزيد
                </Link>
                </div>
            )
         }

    </div>
  )
}

export default MoreMain
