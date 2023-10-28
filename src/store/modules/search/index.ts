/*
 * @Descripttion:
 * @version:
 * @Author: 苏君
 * @email: 1373842098@qq.com
 * @Date: 2023-04-07 11:03:54
 * @LastEditors: sj
 * @LastEditTime: 2023-04-07 11:16:10
 */
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search-store', {
	state: () => ({
		showFull: true
	}),
	actions: {
		changeShowFull(flag: boolean) {

			this.showFull = flag
		}
	},
})
