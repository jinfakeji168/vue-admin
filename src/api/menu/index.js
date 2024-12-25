import request from '@/api'

export const getMenuListApi = () => {
  return request.get({ url: '/mock/menu/list' })
}
