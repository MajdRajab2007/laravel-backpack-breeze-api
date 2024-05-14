import Image from 'next/image'
import React from 'react'

const page = async({params}) => {
    let req = await fetch(`https://api.yg.youth-guide.com/api/posts/tag/${params.id[0]}/${params.id[1]}`)
    let res = await req.json()
    let data = res.data
  return (
    <div className='py-5 md:px-8 flex justify-center items-center dark:bg-darkbg bg-bluePrime'>
        {data.map((lesson) => {
            return (
                <div key={lesson.id} className='border-2 pb-8 border-greenPrime rounded-2xl gap-5
                                                 m-5 flex flex-col items-center justify-center dark:bg-darkbg bg-white'>
                        <Image className=' rounded-t-2xl md:rounded-none' src={`https://api.yg.youth-guide.com/storage/${lesson.image}`} height={500} width={500} alt='...'/>
                        <h1 className='text-2xl md:text-4xl font-bold text-greenPrime dark:text-white'>{lesson.title}</h1>
                        <p className='font-bold leading-10 text-xl w-[80%] text-justify dark:text-bluePrime'>{lesson.body}</p>
                        <p className='w-fit mt-6 py-3 px-4 font-bold text-xl bg-greenPrime text-white'>{lesson.team_name}</p>
                </div>
            )
        })}

    </div>
  )
}

export default page
