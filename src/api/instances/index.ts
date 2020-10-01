import unauthorizedInstance from './unauthorizedInstance';
import createInstance from './authorizedInstance';
import {AxiosInstance} from 'axios';

let token = '';
let authorizedInstance: AxiosInstance | undefined;

const getInstance = async () => {
  if (token === '') {
    const response = await unauthorizedInstance.post('token');
    token = response.data.access_token;
  }

  if (authorizedInstance === undefined) {
    authorizedInstance = await createInstance(token);
  }
  return authorizedInstance;
};

export default getInstance;
