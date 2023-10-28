import axios, { type AxiosResponse } from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
});

request.interceptors.request.use((config: any) => {
  try {
    config.headers = {
      ...config.headers,
    };
  } catch (error) {}
  return config;
});

request.interceptors.request.use(error => {
  return Promise.reject(error.response);
});

request.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200) return response;

    throw new Error(response.status.toString());
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
