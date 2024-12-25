<script setup>
import { Descriptions } from '@/components/Descriptions'

defineProps({
  currentRow: {
    type: Object,
    default: () => undefined
  },
  detailSchema: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <Descriptions :schema="detailSchema" :data="currentRow || {}" />
</template>
