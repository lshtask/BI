/*
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2023-03-08 17:15:44
 * @LastEditors: sj
 * @LastEditTime: 2023-03-10 09:13:19
 */
import type { AxiosProgressEvent, GenericAbortSignal } from 'axios'
import { post } from '@/utils/request'

export function fetchChatAPI<T = any>(
  prompt: string,
  options?: { conversationId?: string; parentMessageId?: string },
  signal?: GenericAbortSignal,
) {
  return post<T>({
    url: '/chat',
    data: { prompt, options },
    signal,
  })
}

export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config',
  })
}

export function fetchChatAPIProcess<T = any>(
  params: {
    prompt: string
    options?: { conversationId?: string; parentMessageId?: string }
    signal?: GenericAbortSignal
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void },
) {
  return post<T>({
    url: '/chat-process',
    data: { prompt: params.prompt, options: params.options },
    signal: params.signal,
    onDownloadProgress: params.onDownloadProgress,
  })
}

export function fetchSession<T>() {
  return post<T>({
    url: '/session',
  })
}

export function fetchVerify<T>(token: string) {
  return post<T>({
    url: '/verify',
    data: { token },
  })
}
