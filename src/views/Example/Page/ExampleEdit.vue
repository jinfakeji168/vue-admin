<script setup>
import Write from './components/Write.vue'
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { ref, unref } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { useRouter, useRoute } from 'vue-router'
import { saveTableApi, getTableDetApi } from '@/api/table'
import { useEventBus } from '@/hooks/event/useEventBus'

const { emit } = useEventBus()

const { push, go } = useRouter()

const { query } = useRoute()

const { t } = useI18n()

const currentRow = ref(null)

const getTableDet = async () => {
  const res = await getTableDetApi(query.id)
  if (res) {
    currentRow.value = res.data
  }
}

getTableDet()

const writeRef = ref()

const loading = ref(false)

const save = async () => {
  const write = unref(writeRef)
  const formData = await write?.submit()
  if (formData) {
    loading.value = true
    const res = await saveTableApi(formData)
      .catch(() => { })
      .finally(() => {
        loading.value = false
      })
    if (res) {
      emit('getList', 'editor')
      push('/example/example-page')
    }
  }
}
</script>

<template>
  <ContentDetailWrap :title="t('exampleDemo.edit')" @back="push('/example/example-page')">
    <Write ref="writeRef" :current-row="currentRow" />

    <template #header>
      <BaseButton @click="go(-1)">
        {{ t('common.back') }}
      </BaseButton>
      <BaseButton type="primary" :loading="loading" @click="save">
        {{ t('exampleDemo.save') }}
      </BaseButton>
    </template>
  </ContentDetailWrap>
</template>
@/hooks/event/useEventBus
