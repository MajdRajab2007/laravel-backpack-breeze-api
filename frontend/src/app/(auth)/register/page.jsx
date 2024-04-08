"use client"
import axios from 'axios';
import React, { useState } from 'react';

window.axios = axios;
// Default headers for API calls
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Base URL for your API calls

// If a token exists in local storage, set it in axios authorization header
const token = localStorage.getItem('token');
if (token) {
   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
// Intercept responses. If 401 error, clear token and redirect to login
axios.interceptors.response.use(
   response => response,
   error => {
      if (error.response?.status === 401) {
         localStorage.removeItem('token');
         axios.defaults.headers.common['Authorization'] = 'Bearer';
         // Redirect to login route
         
      }
      return Promise.reject(error);
   }
);

const Register = () => {

    let [name, setName] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")


    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8000/sanctum/csrf-cookie', {
            method: 'POST',
        })
            .then((res) => {
                let token = res
                console.log(token);
            })

     }
    return (
        <div className='dark:bg-darkbg py-10 flex justify-center items-center'>
            <form onSubmit={(e) => handleSubmit(e)} className='bg-red-500 text-bluePrime font-bold flex flex-col gap-5'>
                <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder="Name" />
                <input onChange={(e) => setemail(e.target.value)} type="email" name='email'  placeholder="Email" />
                <input onChange={(e) => setpassword(e.target.value)} type="password" name='password' placeholder="Password" />
                <button type="submit" className='p-8 bg-black text-white'>Register</button>
            </form>
        </div>
    );
};

export default Register;
