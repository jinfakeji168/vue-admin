import request from '@/api'

export const getRoleListApi = (params) => {
  return request.get({ url: '/api/admin/roles', params })
}
