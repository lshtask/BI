<script setup lang='ts'>
interface Emit {
  (e: 'click'): void
}

const emit = defineEmits<Emit>()

function handleClick() {
  emit('click')
}
</script>

<template>
  <n-button type="tertiary" class="rounded-full" @click="handleClick">
    <slot />
    </n-button>
  
</template>

<style scoped >

.rounded-full {
  border-radius: 9999px;
}

</style>
