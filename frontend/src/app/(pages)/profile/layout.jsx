import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import React from 'react'
export const metadata = {
    title: "الملف الشخصي - دليل الشباب",
    description: "صفحة الملف الشخصي تستطيع من خلالها التعديل على معلوماتك الشخصية مثل صورة حسابك ووصف الحساب، كما بإمكانك مشاهدة المقالات التي قمت بقرائتها"
}
const Layout = ({children}) => {
  return (
    <div className='dark:bg-darkbg'>
      <Navbar />
      {children}
      <Footer fixed=" md:static bottom-[-8%] md:bottom-[-2%]"/>
    </div>
  )
}

export default Layout
