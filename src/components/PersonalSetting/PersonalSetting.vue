<template>
  
  <n-drawer :show="open" :width="700">
    <n-drawer-content title="个人设置" closable>
      
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
interface Iprops {
open: boolean
}

defineProps<Iprops>()

</script>