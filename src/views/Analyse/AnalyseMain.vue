<template>
  <div class="container">
    <div class="container_left">
      <LeftAnalyse />
    </div>
    <div class="container_right">
      <RightAnalyse />
    </div>
  </div>
</template>
<script lang="ts" setup>
import LeftAnalyse from './LeftAnalyse.vue';
import RightAnalyse from './RightAnalyse.vue';
</script>
<style lang="less" scoped>
.container {
  margin: 10px 10px 0 10px;
  display: flex;
  background: white;
  height: 100vh;
  background-image: url('../../assets/back.png');
  &_left {
    width: 50%;
    padding: 50px;

    &_card {
      width: 90%;
    }
  }
  &_right {
    width: 50%;
    padding: 50px;
  }
}
</style>
