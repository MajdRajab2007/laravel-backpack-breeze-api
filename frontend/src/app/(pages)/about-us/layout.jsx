import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import Loading from '@/app/loading'
import React, { Suspense } from 'react'
export const metadata = {
    title: "من نحن - دليل الشباب",
    description: "صفحة من نحن، من خلال هذه الصفحة يمكن التعرف على أعضاء دليل الشباب، والتعرف على الوظيفة التي يقوم بها كل عضو سواء كان مطور واجهات أمامية front end developer، أو back end developer أو ui ux أو video editor أو Cyber security أو"
}
const layout = ({children, about}) => {
  return (
 <>
      <Navbar />
      <div className='dark:bg-darkbg'>
      <Suspense fallback={<Loading />}>
      {children}
      {about}
      <Footer />
      </Suspense>
    </div>
 </>
  )
}

export default layout
