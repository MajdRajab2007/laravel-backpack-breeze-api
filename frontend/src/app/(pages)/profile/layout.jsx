import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import React from 'react'

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
