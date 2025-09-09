import axios from 'axios';

const api = axios.create({
  baseURL: 'https://online-course-tracker-backend.onrender.com/api/',
  withCredentials: false,
});
