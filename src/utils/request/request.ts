import axios, { type AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';
const request = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
});

request.interceptors.request.use((config: any) => {
  try {
    config.headers = {
      ...config.headers,
      ContentType: 'application/json',
      Accept: 'application/json',
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
