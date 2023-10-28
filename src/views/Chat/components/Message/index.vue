<script setup lang='ts'>
import { ref } from 'vue'
import { NDropdown } from 'naive-ui'
import AvatarComponent from './Avatar.vue'
import TextComponent from './Text.vue'
import { SvgIcon } from '@/components/common'
import { copyText } from '@/utils/format'
import { useIconRender } from '@/hooks/useIconRender'
import { t } from '@/locales'

interface Props {
  dateTime?: string
  text?: string
  inversion?: boolean
  error?: boolean
  loading?: boolean
}

interface Emit {
  (ev: 'regenerate'): void
  (ev: 'delete'): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const { iconRender } = useIconRender()

const textRef = ref<HTMLElement>()

const options = [
  {
    label: t('chat.copy'),
    key: 'copyText',
    icon: iconRender({ icon: 'ri:file-copy-2-line' }),
  },
  {
    label: t('common.delete'),
    key: 'delete',
    icon: iconRender({ icon: 'ri:delete-bin-line' }),
  },
]

function handleSelect(key: 'copyRaw' | 'copyText' | 'delete') {
  switch (key) {
    case 'copyText':
      copyText({ text: props.text ?? '' })
      return
    case 'delete':
      emit('delete')
  }
}

function handleRegenerate() {
  emit('regenerate')
}
</script>

<template>
  <div class="container_text" :class="[inversion ? 'flex-row-reverse' : 'flex-row' ]">
    <div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8"
      :class="[inversion ? 'ml-2' : 'mr-2']">
      <AvatarComponent :image="inversion" />
    </div>
    <div class="overflow-hidden text-sm " :class="[inversion ? 'items-end' : 'items-start']">
      <p class="text-xs text-[#b4bbc4]" :class="[inversion ? 'text-right' : 'text-left']">
        {{ dateTime }}
      </p>
      <div class="flex" :class="[inversion ? 'flex-row-reverse' : 'flex-row' ]">
        <TextComponent ref="textRef" :inversion="inversion" :error="error" :text="text" :loading="loading" />
        <div class="flex flex-col">
          <!-- <button v-if="!inversion" class="mb-2 transition text-neutral-300 " @click="handleRegenerate"> -->
            <SvgIcon v-if="!inversion" icon="ri:restart-line" />
          <!-- </button> -->
          <NDropdown :placement="!inversion ? 'right' : 'left'" :options="options" @select="handleSelect">
            <SvgIcon icon="ri:more-2-fill" />
          </NDropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container_text {
  display: flex;
  width: 100%;
  
}

.text-\[\#b4bbc4\] {
  --tw-text-opacity: 1;
  color: rgb(180 187 196 / var(--tw-text-opacity));
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-right {
  text-align: right;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.rounded-full {
  border-radius: 9999px;
}

.overflow-hidden {
  overflow: hidden;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.basis-8 {
  flex-basis: 2rem;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.h-8 {
  height: 2rem;
}


.ml-2 {
  margin-left: 0.5rem;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-row {
  flex-direction: row;
}
</style>
