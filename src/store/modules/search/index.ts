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
