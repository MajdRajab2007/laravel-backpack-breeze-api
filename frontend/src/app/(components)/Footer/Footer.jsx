import React from 'react'

const Footer = (props) => {
  return (
   <div>
    <div className='h-[60px] dark:bg-darkbg'></div>

     <div className={` bg-greenPrime dark:bg-darkbg ${props.fixed} dark:border-t-2 dark:border-greenPrime bottom-0 w-[100%] text-center text-white text-2xl py-4`}>
      حقوق الملكية محفوظة دليل الشباب - Youth Guide 2024
    </div>
   </div>
  )
}

export default Footer
