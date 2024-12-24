import request from "@/utils/request";

const permissions = {

  index(params: any) {
    return request({
      url: `/api/admin/permissions`,
      method: 'get',
      params: params
    });
  },

  store(data: any) {
    return request({
      url: `/api/admin/permissions`,
      method: 'post',
      data: data,
    });
  },

  show(id: number) {
    return request({
      url: `/api/admin/permissions/${id}`,
      method: 'get',
    });
  },

  update(id:number, data: any) {
    return request({
      url: `/api/admin/permissions/${id}`,
      method: 'put',
      data: data,
    });
  },

  destroy(id: number) {
    return request({
      url: `/api/admin/permissions/${id}`,
      method: 'delete',
    });
  },

};

export default permissions;
