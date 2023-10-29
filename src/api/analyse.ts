import { post } from '@/utils/request/index';
import type { AnalyseForm, AnalyseFormData } from './type';

export function fetchAnalyseForm<T>(data: AnalyseForm, body: {}, file: File) {
  delete data.file
  const paramsString = new URLSearchParams(data).toString()
  
  // if(file) {
  const formData = new FormData();
  formData.append('file', file);
  // }
  return post<T>({
    url: `/api/chart/gen?${paramsString}`,
    data: formData
  });
}

// export function fetchAnalyseFormData<T>(file: AnalyseFormData) {
  
//   // if(file) {
//   const formData = new FormData();
//   formData.append('file', file);
//   // }
//   return post<T>({
//     url: '/api/chart/add',
//     data: formData,
//   });
// }
