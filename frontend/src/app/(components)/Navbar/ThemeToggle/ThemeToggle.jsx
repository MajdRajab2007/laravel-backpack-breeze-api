"use client"

import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

 
const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState() ;
    
   

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if(theme === "dark") {
            setDarkMode(true)
        }
    },[])
    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    },[darkMode])

    // darkMode === true ? setState("Light") : setState("Dark");
  return (
    <div className='
    relative w-16 h-8 flex items-center  dark:border-2 dark:text-gray-500 bg-secondry border-2 border-white cursor-pointer rounded-full p-1
    '
    onClick={() => setDarkMode(!darkMode)}
    >
        <FaMoon className='text-white size-5 '/>
        <div
            className='transform transition-transform duration-500 absolute dark:bg-gray-400 bg-white w-6 h-6 rounded-full'
            style={darkMode ? {left:"2px"} : {right:"2px"}}
        ></div>
        <FaSun className={`text-yellow-400 mr-auto  size-5 `} />
    </div>
  )
}

export default ThemeToggle
