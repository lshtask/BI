import axios, { type AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';
const request = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  withCredentials: true
});

request.interceptors.request.use((config: any) => {
  try {
    config.headers = {
      ...config.headers,
      
      Authorization: 'Bearer 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',
    };
  } catch (error) {}
  return config;
});

request.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.data.code !== 0 && response.data.message) {
      message.error(response.data.message);
    } else {
      response.data.message && message.success(response.data.message);
    }

    if (response.status === 200) {
      return response;
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
