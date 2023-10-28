/*
 * @Descripttion:
 * @version:
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2023-03-10 09:13:34
 * @LastEditors: sj
 * @LastEditTime: 2023-04-04 15:25:15
 */
import { post, get } from '@/utils/request'

// export const BaseUrl_Search =

export interface GetSearchListParams {
	user_id?: any,
	user_name?: any,
	page_index: number,
	page_size?: number
kw?:string,
type?:string
}

export function getSearchList<T = any>(data:GetSearchListParams) {
  return post<T>({
		url: '/search-api/search',
		data,
	})
}

export function getIsPrivateIp<T = any>() {
	return get<T>({
		url: '/search-api/isPrivateIp'
	})
}

export interface GetSearchMobileParams extends GetSearchListParams {
	timestamp: string
	token_oa: string
}

export function getSearchMobileList<T = any>(data: GetSearchMobileParams) {
	return post<T>({
		url: '/search-api/searchMobile',
		data,
	})
}

export interface SearchOAParams {
	key: string,
	contentType: string,
	sourceType: string,
	searchType: string,
	page: number
}
export function getSearchOA<T = any>(data: SearchOAParams) {
	return post<T>({
		url: '/oa-api/api/fullsearch/base/doSearch',
		data,
	})
}
