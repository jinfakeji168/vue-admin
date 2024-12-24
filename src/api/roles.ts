import request from "@/utils/request";

const roles = {

  index(params: any) {
    return request({
      url: `/api/admin/roles`,
      method: 'get',
      params: params
    });
  },

  store(data: any) {
    return request({
      url: `/api/admin/roles`,
      method: 'post',
      data: data,
    });
  },

  show(id: number) {
    return request({
      url: `/api/admin/roles/${id}`,
      method: 'get',
    });
  },

  update(id:number, data: any) {
    return request({
      url: `/api/admin/roles/${id}`,
      method: 'put',
      data: data,
    });
  },

  destroy(id: number) {
    return request({
      url: `/api/admin/roles/${id}`,
      method: 'delete',
    });
  },

};

export default roles;
