import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import Loading from '@/app/loading'
import React, { Suspense } from 'react'

const layout = ({children}) => {
  return (
<>
      <Navbar />
<div className='dark:bg-darkbg '>
      <Suspense fallback={<Loading />}>
      {children}

        <Footer fixed="relative bottom-[-170px] md:static"/>
      </Suspense>
    </div>
</>
  )
}

export default layout
