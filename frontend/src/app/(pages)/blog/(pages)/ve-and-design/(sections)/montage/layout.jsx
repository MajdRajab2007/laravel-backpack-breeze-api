import React from 'react'
import style from "@/app/(pages)/blog/(pages)/CSS/style.module.css"

const Layout = ({children, more}) => {
  return (
    <div className={`dark:bg-darkbg  ${style.back}`}>
            {children}
            {more}
    </div>
  )
}

export default Layout
