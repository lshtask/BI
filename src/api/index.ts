import type { AxiosProgressEvent, GenericAbortSignal } from 'axios';
import { post } from '@/utils/request/index';

export function fetchChatAPI<T = any>(
  prompt: string,
  options?: { conversationId?: string; parentMessageId?: string },
  signal?: GenericAbortSignal,
) {
  return post<T>({
    url: '/chat',
    data: { prompt, options },
    signal,
  });
}

export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config',
  });
}

export function fetchChatAPIProcess<T = any>(params: any) {
  return post<T>({
    url: 'https://api.openai.com/v1/chat/completions',
    data: {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: params.prompt }],
      stream: true,
      // options: params.options,
    },
    signal: params.signal,
    onDownloadProgress: params.onDownloadProgress,
  });
}

export function fetchSession<T>() {
  return post<T>({
    url: '/session',
  });
}

export function fetchVerify<T>(token: string) {
  return post<T>({
    url: '/verify',
    data: { token },
  });
}
