<template>
  <a-card title="分析结论" class="top">
    <Emty />
  </a-card>
  <a-card title="可视化图表" class="bottom">
    <Emty />
  </a-card>
</template>

<script lang="ts" setup>
import Emty from './EmtyState.vue';
</script>

<style scoped lang="less">
.top,
.bottom {
  width: 90%;
  margin-bottom: 50px;
}
</style>
