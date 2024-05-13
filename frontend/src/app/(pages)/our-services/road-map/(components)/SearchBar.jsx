"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const SearchBar = () => {

    let [serach, setSearch] = useState("")
    let [data, setData] = useState(false)

    let handleFetch = async (e) => {
        e.preventDefault()
        let req = await fetch(`https://api.yg.youth-guide.com/api/self-roadmap/search/${serach}`)
        let res = await req.json()
        //(res)
        setData(res)
    }

  return (
    <>
        <form className='w-[50%] mx-auto' onSubmit={(e) => {
        handleFetch(e)
    }}>
            <input type="search" name="" id="" onChange={(e) => setSearch(e.target.value)}
            className='border-none bg-bluePrime focus:bg-white
            focus:border-bluePrime text-xl text-center
             w-[100%] h-[38px] text-white focus:text-black font-bold rounded-2xl'

             placeholder='اكتب اسم المجال الذي تريد تعلمه'/>
             <input type="submit" className='' placeholder='' value='' />
        </form>


    {
        data ? <div className='grid mt-8 grid-cols-3 gap-5 justify-center items-center'>
            {
            data.map((road) => {
                return (
                    <Link href={`/our-services/road-map/${road.id}`} key={road.id} className='flex flex-col rounded-2xl py-2 px-4 justify-center items-center gap-4 bg-greenPrime text-white'>
                        <h1 className='text-3xl font-bold'>{road.title}</h1>
                        <h1 className='text-xl'>{road.review}</h1>
                    </Link>
                )
            })
    }
        </div> :
           <>
                 <div className='mt-8 grid md:grid-cols-2 justify-center items-center gap-10'>

<Link href={''} className='bg-greenPrime w-[100%] md:w-[80%] m-auto rounded-3xl py-4 px-2 flex justify-center items-center font-bold text-2xl text-white'>
    Back-End
</Link>
<Link href={''} className='bg-greenPrime w-[100%] md:w-[80%] m-auto rounded-3xl py-4 px-2 flex justify-center items-center font-bold text-2xl text-white'>
    Front-End
</Link>
<Link href={''} className='bg-greenPrime w-[100%] md:w-[80%] m-auto rounded-3xl py-4 px-2 flex justify-center items-center font-bold text-2xl text-white'>
    Data Analysis
</Link>
<Link href={''} className='bg-greenPrime w-[100%] md:w-[80%] m-auto rounded-3xl py-4 px-2 flex justify-center items-center font-bold text-2xl text-white'>
    App Development
</Link>

</div>

<div className='w-[30%] mx-auto mt-5 py-2 px-4 bg-bluePrime text-center rounded-3xl text-white font-bold'>
عرض المزيد
</div>
           </>

    }

    </>
  )
}

export default SearchBar
