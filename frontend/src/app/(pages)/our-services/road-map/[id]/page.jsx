
import Image from 'next/image';
import React from 'react'

const ReadRoad = async ({params}) => {

        let req = await fetch(`http://localhost:8000/api/self-roadmap/${params.id}`);
        let res = await req.json();
        //(res);

  return (
        <div key={res.id} className='border-2 pb-8 rounded-2xl gap-5
            m-5 flex flex-col items-center justify-center dark:bg-darkbg bg-white'>
          <Image className=' rounded-t-2xl md:rounded-none' src={`http://localhost:8000/storage/${res.image}`} height={500} width={500} alt='...'/>
         <h1 className='text-2xl md:text-4xl font-bold text-greenPrime dark:text-white'>{res.title}</h1>
         <p className='font-bold leading-10 text-xl w-[80%] text-justify dark:text-bluePrime'>{res.body}</p>
    </div>
  )
}

export default ReadRoad
