import unauthorizedInstance from './unauthorizedInstance';
import createInstance, {updateAuth} from './authorizedInstance';
import {AxiosInstance} from 'axios';

let token = '';
let authorizedInstance: AxiosInstance | undefined;

const setupMiddlewares = async (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    async (response) => {
      if (response.status !== 401) {
        return response;
      }

      await refreshToken();

      updateAuth(instance, token);
      authorizedInstance = instance;

      return response;
    },
    (error) => {
      console.log(error);
    },
  );
};

async function refreshToken() {
  if (token === '') {
    const response = await unauthorizedInstance.post('token');
    token = response.data.access_token;
  }
}

const getInstance = async () => {
  await refreshToken();

  if (authorizedInstance === undefined) {
    authorizedInstance = await createInstance(token);
  }

  await setupMiddlewares(authorizedInstance);

  return authorizedInstance;
};

export default getInstance;
