import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import React from 'react'
export const metadata = {
    title: "خدماتنا - دليل الشباب",
    description: "من خلال صفحة خدماتنا يمكنك التعرف على الخدمات التي يقدمها فريق دليل الشباب مثل تقديم خارطة الطريق لأكثر من ٥٠ مجال تقني أو التعلم عن طريق مشاهدة الفيديوهات والتي يقدمها الفريق على منصة يوتيوب أو المقالات النصية الموجودة في قسم المدونة."
}
const layout = ({children}) => {
  return (
<>
      <Navbar />
<div className='dark:bg-darkbg'>
      {children}

      <Footer />
    </div>
</>
  )
}

export default layout
