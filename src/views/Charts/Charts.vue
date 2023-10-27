<template>
  <div class="container">
    <div class="input">
      <a-input-search v-model:value="value" placeholder="请输入图标名称" style="width: 400px" @search="onSearch" />
    </div>
    <div class="main">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Card from './Card.vue';
const value = ref<string>('');

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};
</script>

<style scoped lang="less">
.container {
  background: white;
  margin: 10px 10px 0 10px;
  height: 100%;
  overflow: hidden;
  background-image: url('../../assets/back.png');
}

.input {
  margin: 10px;
  display: flex;
  justify-content: end;
}

.main {
  display: flex;
  flex-wrap: wrap;

}
</style>
