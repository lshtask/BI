<script setup lang='ts'>
import { computed, useAttrs } from 'vue'
import { Icon } from '@iconify/vue'
// https://icon-sets.iconify.design/material-symbols/search-sharp/

interface Props {
  icon?: string
}

defineProps<Props>()

const attrs = useAttrs()

const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || '',
}))
</script>

<template>
  <Icon :icon="icon" v-bind="bindAttrs" />
</template>
