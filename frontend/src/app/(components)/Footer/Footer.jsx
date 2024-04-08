import React from 'react'

const Footer = (props) => {
  return (
   <div>
    <div className='h-[60px]'></div>
     <div className={` bg-greenPrime ${props.fixed} bottom-0 w-[100%] text-center text-white text-2xl py-4`}>
      حقوق الملكية محفوظة دليل الشباب - Youth Guide 2024 
    </div>
   </div>
  )
}

export default Footer
