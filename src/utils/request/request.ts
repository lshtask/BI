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
      Authorization:
        'Bearer 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',
    };
  } catch (error) {}
  return config;
});

request.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {

    if (
      response.data.code !== 0 &&
      response.request.responseURL !==
        'https://api.openai.com/v1/chat/completions'
    ) {
      message.error(response.data.message);
      return response;
    }
    if (response.status === 200 && response.data.code === 0) {
      message.success(response.data.message);
      return response;
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
