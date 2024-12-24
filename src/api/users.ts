import request from "@/utils/request";

const users = {

  index(params: any) {
    return request({
      url: `/api/admin/users`,
      method: 'get',
      params: params
    });
  },

  store(data: any) {
    return request({
      url: `/api/admin/users`,
      method: 'post',
      data: data,
    });
  },

  show(id: number) {
    return request({
      url: `/api/admin/users/${id}`,
      method: 'get',
    });
  },

  update(id:number, data: any) {
    return request({
      url: `/api/admin/users/${id}`,
      method: 'put',
      data: data,
    });
  },

  destroy(id: number) {
    return request({
      url: `/api/admin/users/${id}`,
      method: 'delete',
    });
  },

};

export default users;
