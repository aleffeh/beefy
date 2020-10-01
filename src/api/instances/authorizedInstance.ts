import axios from 'axios';

const createInstance = (token: string) => {
  return axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {['Authorization']: `Bearer ${token}`},
  });
};

export default createInstance;
