// Loading.js
import React from 'react';
import logo from "./logo.png"
import Image from 'next/image';
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-24 h-24 border-8 flex justify-center items-center border-l-transparent animate-spin border-greenPrime rounded-full ">
        <Image src={logo} width={50} priority height={50} alt='logo' className='animate-pulse' />
      </div>
    </div>
  );
};

export default Loading;
