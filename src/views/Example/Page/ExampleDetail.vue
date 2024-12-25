<script setup>
import Detail from './components/Detail.vue'
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { ref } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { useRouter, useRoute } from 'vue-router'
import { getTableDetApi } from '@/api/table'

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
</script>

<template>
  <ContentDetailWrap :title="t('exampleDemo.detail')" @back="push('/example/example-page')">
    <template #header>
      <BaseButton @click="go(-1)">
        {{ t('common.back') }}
      </BaseButton>
    </template>
    <Detail :current-row="currentRow" />
  </ContentDetailWrap>
</template>
