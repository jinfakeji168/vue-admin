<script setup>
import { useIcon } from '@/hooks/web/useIcon'
import { useI18n } from '@/hooks/web/useI18n'

const emit = defineEmits(['search', 'reset', 'expand'])

const { t } = useI18n()

defineProps({
  showSearch: {
    type: Boolean,
    default: true
  },
  showReset: {
    type: Boolean,
    default: true
  },
  showExpand: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default: true
  },
  searchLoading: {
    type: Boolean,
    default: false
  },
  resetLoading: {
    type: Boolean,
    default: false
  }
})

const onSearch = () => {
  emit('search')
}

const onReset = () => {
  emit('reset')
}

const onExpand = () => {
  emit('expand')
}
</script>

<template>
  <BaseButton v-if="showSearch" type="primary" :loading="searchLoading" :icon="useIcon({ icon: 'vi-ep:search' })"
    @click="onSearch">
    {{ t('common.query') }}
  </BaseButton>
  <BaseButton v-if="showReset" :loading="resetLoading" plain :icon="useIcon({ icon: 'vi-ep:refresh-right' })"
    @click="onReset">
    {{ t('common.reset') }}
  </BaseButton>
  <BaseButton v-if="showExpand" :icon="useIcon({ icon: visible ? 'vi-ep:arrow-up' : 'vi-ep:arrow-down' })" text
    @click="onExpand">
    {{ t(visible ? 'common.shrink' : 'common.expand') }}
  </BaseButton>
</template>
