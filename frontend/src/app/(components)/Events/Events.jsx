import React from 'react'
import Image from 'next/image'
import image from "./images/image.png"
import rema from "./images/rema.jpg"

const Events = () => {
  return (
<div>
      <h1 className='text-5xl font-extrabold pt-8 text-greenPrime text-center pb-[20px] dark:bg-darkbg'>ABC WORKSHOPS</h1>
<div className='dark:bg-darkbg py-8 px-4'>
        <div className=' flex flex-col-reverse md:flex-row justify-center items-center gap-14 '>
            <div className='text-bluePrime font-bold text-2xl text-justify '>
            حدث مجتمعي بدأ في آذار سنة 2023 امتد لخمسة مواسم وانتهى في آذار سنة 2024 يهدف لإعطاء أساسيات المجال المطروح في كل موسم من دخول العالم التقني إلى سوق العمل!            </div>
            <Image src={image} alt={"image"}  className='m-auto w-[250px] md:w-[600px] rounded-lg' />
        </div>
    </div>

    <div className='dark:bg-darkbg py-8 px-4'>
        <div className=' flex flex-col md:flex-row justify-center items-center gap-14 '>
            <Image src={rema} alt={"image"}  className='m-auto w-[250px] md:w-[600px] rounded-[70px]' />
            <div className='text-bluePrime font-bold text-2xl text-justify '>
            لمدة عام واحد استضاف فريق دليل الشباب 5 مواسم ناقشنا من خلالها 21 ورشة تدريبية استفاد من خلالها أكثر 700 يافع خلال العام في محافظتي اللاذقية وطرطوس!

ناقشنا من خلالها المقدمة التقنية العامة ، الذكاء الصنعي ، المهارات الناعمة في عام 2023!
وفي حدث عام 2024 ناقشنا من خلاله كيف يمكنك دخول العالم التقني            </div>
        </div>
    </div>
</div>
  )
}

export default Events
