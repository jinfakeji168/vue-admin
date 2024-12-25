import request from '@/api'

export const loginApi = (data) => {
  return request.post({ url: '/api/admin/auth/token', data })
}

export const loginOutApi = () => {
  return request.get({ url: '/mock/user/loginOut' })
}

export const getUserApi = () => {
  return request.get({ url: '/api/admin/user' })
}
export const getUserListApi = ({ params }) => {
  return request.get({ url: '/mock/user/list', params })
}

export const getAdminRoleApi = (params) => {
  return request.get({ url: '/mock/role/list', params })
}

export const getTestRoleApi = (params) => {
  return request.get({ url: '/mock/role/list2', params })
}
