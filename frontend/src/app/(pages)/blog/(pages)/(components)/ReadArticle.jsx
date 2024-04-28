"use client"
// Import React and other required modules
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUserData, fetchUserData } from '../../../../../../lib/features/users/users';
import { TiArrowRightThick } from "react-icons/ti";

// Define the ReadArticle component
const ReadArticle = ({ body, email, tag, id }) => {
  // Initialize useDispatch hook
  const dispatch = useDispatch();

  // Use useEffect hook to execute code after component mount
  useEffect(() => {
    // Check if the component is running on the client side
    if (typeof window !== 'undefined') {
      // Retrieve user data from sessionStorage
      const storedUserData = sessionStorage.getItem('userData');
      // Parse stored user data
      const userInfo = storedUserData ? storedUserData : null;
      // Log user info for debugging
    //   //(userInfo);
    }
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  // Render the component
  return (
    <Link href={`/lessons/${tag}/${id}`} className='w-[100%] bg-bluePrime rounded-b-xl flex justify-center items-center font-bold text-white py-1 ' onClick={() => {
      // Check if the component is running on the client side
      if (typeof window !== 'undefined') {
        // Retrieve user data from sessionStorage
        const storedUserData = sessionStorage.getItem('userData');
        // Parse stored user data
        const userInfo = storedUserData ? JSON.parse(storedUserData) : null;
        // Check if user info and email exist
        if (userInfo && userInfo.data.email) {
          // Dispatch addUserData action with email and body
          dispatch(addUserData({ email: userInfo.data.email, newData: { body: body } }));
          dispatch(fetchUserData(userInfo.data.email));
        } else {
          // Log error if user email not found
          console.error('User email not found in sessionStorage');
        }
      }
    }}>
      <TiArrowRightThick  className='text-4xl text-white'/>
    </Link>
  );
};

// Export the ReadArticle component
export default ReadArticle;
