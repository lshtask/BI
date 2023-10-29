<template>
  <a-card title="分析结论" class="top">
    <Emty v-if="!chatStore.open" />
    <a-spin v-if="chatStore.open" size="large" class="loading" />

  </a-card>
  <a-card title="可视化图表" class="bottom">
    <Emty v-if="!chatStore.open" />
    <a-spin v-if="chatStore.open" size="large" class="loading" />
  </a-card>
</template>

<script lang="ts" setup>
import Emty from './EmtyState.vue';
import { useChatStore } from "@/store";


const chatStore = useChatStore()
</script>

<style scoped lang="less">
.top,
.bottom {
  width: 90%;
  margin-bottom: 50px;
  height: 200px;

}

.loading {
  width: 100%;
}
</style>
