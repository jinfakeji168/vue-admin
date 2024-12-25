<script lang="jsx" setup>
import { computed, getCurrentInstance, onMounted, unref, useAttrs, useSlots } from 'vue'
import Dialog from './Dialog.vue'
import { useResize } from '../hooks/useResize'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Dialog'
  },
  fullscreen: {
    type: Boolean,
    default: true
  },
  initWidth: {
    type: Number,
    default: window.innerWidth / 2
  },
  initHeight: {
    type: Number,
    default: 200
  },
  minResizeWidth: {
    type: Number,
    default: window.innerWidth / 2
  },
  minResizeHeight: {
    type: Number,
    default: 200
  }
})
const { maxHeight, minWidth, setupDrag } = useResize({
  minHeightPx: props.minResizeHeight,
  minWidthPx: props.minResizeWidth,
  initHeight: props.initHeight,
  initWidth: props.initWidth
})

const vResize = {
  mounted (el) {
    const observer = new MutationObserver(() => {
      const elDialog = el.querySelector('.el-dialog')

      if (elDialog) {
        // 在确认 `elDialog` 已渲染后进行处理
        setupDrag(elDialog, el)
        // observer.disconnect() // 一旦获取到元素，停止观察
      }
    })
    // 开始观察子节点的变化
    observer.observe(el, { childList: true, subtree: true })
  }
}

const attrs = useAttrs()
const slots = useSlots()
const getBindValue = computed(() => {
  const delArr = ['maxHeight', 'width']
  const obj = Object.assign({}, { ...unref(attrs), ...props })
  for (const key in obj) {
    if (delArr.indexOf(key) !== -1) {
      delete obj[key]
    }
  }
  return obj
})
const instance = getCurrentInstance()
const initDirective = () => {
  const directives = instance?.appContext?.app._context?.directives

  // 检查指令是否已经注册
  if (!directives || !directives['resize']) {
    instance?.appContext?.app.directive('resize', vResize)
  }
}
onMounted(() => {
  initDirective()
})
</script>
<template>
  <div v-resize>
    <Dialog v-bind="getBindValue" :maxHeight="maxHeight" :width="minWidth">
      <slot></slot>
      <template v-if="slots.footer" #footer>
        <slot name="footer"></slot>
      </template>
    </Dialog>
  </div>
</template>
