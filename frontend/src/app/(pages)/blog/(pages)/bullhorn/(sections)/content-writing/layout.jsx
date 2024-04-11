import React from 'react'

const Layout = ({children, more}) => {
  return (
    <div className='dark:bg-darkbg'>
            {children}
            {more}
    </div>
  )
}

export default Layout
