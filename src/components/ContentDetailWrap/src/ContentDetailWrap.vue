<script setup>
import { ElCard } from 'element-plus'
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('content-detail-wrap')

defineProps({
  title: {
    type: String,
    default: ""
  },
  message: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div :class="[`${prefixCls}-container`, 'relative']">
    <ElCard :class="[`${prefixCls}-body`, 'mb-20px']" shadow="never">
      <div class="mb-20px pb-20px" style="border-bottom: 1px solid var(--el-border-color)">
        <slot name="header"></slot>
      </div>
      <slot></slot>
    </ElCard>
  </div>
</template>
