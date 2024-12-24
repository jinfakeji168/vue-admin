import request from '@/axios'

export const getRoleListApi = (params) => {
  return request.get({ url: '/api/admin/roles', params })
}
