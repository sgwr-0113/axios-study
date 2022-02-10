import axios from 'axios';

export const QiitaClient = axios.create({
  baseURL: 'https://qiita.com/api/v2',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
