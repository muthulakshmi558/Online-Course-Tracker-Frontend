import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/api/'
    : 'https://online-course-tracker-backend.onrender.com/api/',
  withCredentials: false,
});
