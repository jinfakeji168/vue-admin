<script setup>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { computed } from 'vue'

const emits = defineEmits([
  'update:modelValue',
  'node-click',
  'brackets-click',
  'icon-click',
  'selected-value'
])

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  },
  deep: {
    type: Number,
    default: 5
  },
  showLength: {
    type: Boolean,
    default: true
  },
  showLineNumbers: {
    type: Boolean,
    default: true
  },
  showLineNumber: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  showDoubleQuotes: {
    type: Boolean,
    default: true
  },
  virtual: {
    type: Boolean,
    default: false
  },
  height: {
    type: Number,
    default: 400
  },
  itemHeight: {
    type: Number,
    default: 20
  },
  rootPath: {
    type: String,
    default: 'root'
  },
  nodeSelectable: {
    type: Function,
    default: (e) => { return e }
  },
  selectableType: {//['multiple', 'single']
    type: String,
    default: ''
  },
  showSelectController: {
    type: Boolean,
    default: false
  },
  selectOnClickNode: {
    type: Boolean,
    default: true
  },
  highlightSelectedNode: {
    type: Boolean,
    default: true
  },
  collapsedOnClickBrackets: {
    type: Boolean,
    default: true
  },
  renderNodeKey: {
    type: Function,
    default: (e) => { return e }
  },
  renderNodeValue: {
    type: Function,
    default: (e) => { return e }
  },
  editable: {
    type: Boolean,
    default: true
  },
  editableTrigger: {//['click', 'dblclick']
    type: String,
    default: 'click'
  }
})

const data = computed(() => props.modelValue)

const localModelValue = computed({
  get: () => data.value,
  set: (val) => {
    console.log(val)
    emits('update:modelValue', val)
  }
})

const nodeClick = (node) => {
  emits('node-click', node)
}

const bracketsClick = (collapsed) => {
  emits('brackets-click', collapsed)
}

const iconClick = (collapsed) => {
  emits('icon-click', collapsed)
}

const selectedChange = (newVal, oldVal) => {
  console.log(newVal, oldVal)
  emits('selected-value', newVal, oldVal)
}
</script>

<template>
  <VueJsonPretty v-model:data="localModelValue" :deep="deep" :show-length="showLength"
    :show-line-numbers="showLineNumbers" :show-line-number="showLineNumber" :show-icon="showIcon"
    :show-double-quotes="showDoubleQuotes" :virtual="virtual" :height="height" :item-height="itemHeight"
    :root-path="rootPath" :node-selectable="nodeSelectable" :selectable-type="selectableType"
    :show-select-controller="showSelectController" :select-on-click-node="selectOnClickNode"
    :highlight-selected-node="highlightSelectedNode" :collapsed-on-click-brackets="collapsedOnClickBrackets"
    :render-node-key="renderNodeKey" :render-node-value="renderNodeValue" :editable="editable"
    :editable-trigger="editableTrigger" @node-click="nodeClick" @brackets-click="bracketsClick" @icon-click="iconClick"
    @selected-change="selectedChange" />
</template>
