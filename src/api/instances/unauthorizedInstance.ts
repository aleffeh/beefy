import axios from 'axios';
import Querystring from 'querystring';

const unauthorizedInstance = axios.create({
  baseURL: 'https://accounts.spotify.com/api/',
  headers: {
    Authorization:
      'Basic ZWNmNGE4NmUyN2M2NDlhMWJiOWEzNDQyMWNhNmYwOGY6ZDUxNTJmNzY5YjJiNGQ3N2FhZTUwNzdjZTcyMGJhNGU=',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

unauthorizedInstance.interceptors.request.use(
  (res) => {
    res.data = body;
    return res;
  },
  (err) => {
    console.log(err);
  },
);

let body = Querystring.stringify({
  grant_type: 'client_credentials',
});

export default unauthorizedInstance;
