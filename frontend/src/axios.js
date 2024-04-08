// utils/axios.js

import axios from 'axios';

const instance = axios.create({
  timeout: 10000, // Timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json',
    // You can add any default headers here
  }
});

export default instance;
