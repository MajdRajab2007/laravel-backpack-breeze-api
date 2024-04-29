import Link from 'next/link'
import React from 'react'
import SearchBar from './(components)/SearchBar'

const RoadMap = () => {
  return (
    <div className='dark:bg-darkbg pt-8 pb-12 min-h-[900px] md:min-h-[600px]'>
        <div className='my- mx-auto w-[60%] md:w-[30%] rounded-3xl bg-greenPrime py-3 text-center flex gap-x-4 justify-center items-center'>
            <h1 className='text-3xl font-bold text-white'>Self-Roadmap</h1>
        </div>
        <h1 className='mt-5 mb-5 dark:text-white font-bold text-2xl text-center'>
            يوجد في هذا القسم مسارات التعلم لأكثر من 50 مجال
        </h1>

            <SearchBar />


    </div>
  )
}

export default RoadMap
