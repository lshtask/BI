<template>
  <a-drawer :open="visible" class="custom-class" root-class-name="root-class-name" :root-style="{ color: 'blue' }"
    style="color: red" title="Basic Drawer" placement="right" @after-open-change="afterOpenChange">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script setup lang="ts">
import { watch } from "vue";
interface Props {
  visible: boolean
}
const props = defineProps<Props>()
console.log('====================================');
console.log(props?.visible);
console.log('====================================');

</script>

<style scoped lang="less"></style>