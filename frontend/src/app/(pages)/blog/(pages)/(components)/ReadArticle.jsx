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
  let userEmail = null;

  if (typeof window !== 'undefined') {
      let emailItem = sessionStorage.getItem('userEmail');
      userEmail = emailItem;
  }

  // Render the component
  return (
    <Link href={`/lessons/${tag}/${id}`} className='w-[100%] bg-bluePrime rounded-b-xl flex justify-center items-center font-bold text-white py-1 ' onClick={() => {
      // Check if the component is running on the client side
      if (typeof window !== 'undefined') {
        // Retrieve user data from sessionStorage
        // Parse stored user data
        // Check if user info and email exist

          // Dispatch addUserData action with email and body
          dispatch(addUserData({ email: userEmail, newData: body }));
        //   dispatch(fetchUserData(userEmail));

      }
    }}>
      <TiArrowRightThick  className='text-4xl text-white'/>
    </Link>
  );
};

// Export the ReadArticle component
export default ReadArticle;
