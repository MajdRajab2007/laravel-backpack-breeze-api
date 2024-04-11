import Footer from '@/app/(components)/Footer/Footer'
import Navbar from '@/app/(components)/Navbar/Navbar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='dark:bg-darkbg'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout
