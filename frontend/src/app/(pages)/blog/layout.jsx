import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
<>
      <Navbar />
<div className='dark:bg-darkbg '>
      {children}

      <Footer fixed="relative bottom-[-170px] md:static"/>
    </div>
</>
  )
}

export default layout
