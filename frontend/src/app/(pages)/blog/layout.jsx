import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import Loading from '@/app/loading'
import React, { Suspense } from 'react'


export const metadata = {
    title: "المدونة - دليل الشباب",
    description: 'من خلال صفحة المدونة يمكنك الوصول إلى أكثر من عشرة أقسام من الوظائف التكنلوجية سواء كانت برمجة أو تصميم ومونتاج أو كتابة محتوى وغيرها، مقدمة من أعضاء دليل الشباب بطريقة تناسب الأعمار اليافعة وسهلة التعلم.'
}

const layout = ({children}) => {
  return (
<>
      <Navbar />
<div className='dark:bg-darkbg '>
      <Suspense fallback={<Loading />}>
      {children}

        <Footer bg={'bg-greenPrime'} fixed="relative md:static bottom-[-90px]" height={"md:h-[70px] bg-greenPrime"}/>
      </Suspense>
    </div>
</>
  )
}

export default layout
