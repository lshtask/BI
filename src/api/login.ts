import { post, get } from '@/utils/request/index';
import type{ Register } from "./type";

export function fetchRegister<T>(data: Register ) {
  return post<T>({
    url: '/api/user/register',
    data
  });
}
export function fetchLogin<T>(data: Register ) {
  return post<T>({
    url: '/api/user/login',
    data
  });
}
export function fetchGetLogin<T>( ) {
  return get<T>({
    url: '/api/user/get/login',
    
  });
}

