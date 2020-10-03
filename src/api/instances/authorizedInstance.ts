import axios, {AxiosInstance} from 'axios';

const createInstance = (token: string) => {
  return axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {['Authorization']: `Bearer ${token}`},
  });
};

export const updateAuth = (instance: AxiosInstance, token: string) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export default createInstance;
