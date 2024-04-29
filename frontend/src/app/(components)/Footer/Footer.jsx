import React from 'react'

const Footer = (props) => {
  return (
   <div className={`border-none pt-24 ${props.bg}`}>

     <div className={` bg-bluePrime dark:bg-darkbg ${props.fixed} dark:border-t-2 dark:border-greenPrime bottom-0 w-[100%] text-center text-white text-2xl py-4`}>
      حقوق الملكية محفوظة دليل الشباب - Youth Guide &copy;2024
    </div>
   </div>
  )
}

export default Footer
