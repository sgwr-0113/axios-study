import axios from 'axios';

export const JPHClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
