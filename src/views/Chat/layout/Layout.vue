<script setup lang='ts'>
import { computed } from 'vue'
import { NLayout, NLayoutContent } from 'naive-ui'
import { useRouter } from 'vue-router'
import Sider from './sider/index.vue'
import Permission from './Permission.vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { useAppStore, useAuthStore, useChatStore } from '@/store'

const router = useRouter()
const appStore = useAppStore()
const chatStore = useChatStore()
const authStore = useAuthStore()
router.replace({ name: 'Chat', params: { uuid: chatStore.active } })

const { isMobile } = useBasicLayout()

const collapsed = computed(() => appStore.siderCollapsed)

const needPermission = computed(() => !!authStore.session?.auth && !authStore.token)

const getMobileClass = computed(() => {
	if (isMobile.value)
		return ['rounded-none', 'shadow-none']
	return ['border', 'rounded-md', 'shadow-md', 'dark:border-neutral-800']
})

const getContainerClass = computed(() => {
	return [
		'h-full',
		{ 'pl-[260px]': !isMobile.value && !collapsed.value },
	]
})




</script>

<template>
	<div class="layoutContainer h-full w-full flex " :class="[isMobile ? 'p-0' : 'p-4']">
		<div class="backHome-container">
			<div class="backHome">
				<SvgIcon icon="ph:arrow-fat-left-fill" />
			</div>
		</div>
		<div class="h-full w-full dark:bg-[#24272e] transition-all">
			<div class="h-full overflow-hidden" :class="getMobileClass">
				<NLayout class="z-40 transition" :class="getContainerClass" has-sider>
					<Sider />
					<NLayoutContent class="h-full">
						<RouterView v-slot="{ Component, route }">
							<component :is="Component" :key="route.fullPath" />
						</RouterView>
					</NLayoutContent>
				</NLayout>
			</div>
			<Permission :visible="needPermission" />
		</div>
	</div>
</template>
<style lang="less" scoped>
.layoutContainer {
	padding-top: 40px;
}

.backHome {
	height: 34px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28px;
	color: #92a7da;
	cursor: pointer;
	margin-right: 0.5rem;
}
</style>
