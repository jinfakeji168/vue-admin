import request from "@/utils/request";

const admins = {

  index(params: any) {
    return request({
      url: `/api/admin/admins`,
      method: 'get',
      params: params
    });
  },

  store(data: any) {
    return request({
      url: `/api/admin/admins`,
      method: 'post',
      data: data,
    });
  },

  show(id: number) {
    return request({
      url: `/api/admin/admins/${id}`,
      method: 'get',
    });
  },

  update(id:number, data: any) {
    return request({
      url: `/api/admin/admins/${id}`,
      method: 'put',
      data: data,
    });
  },

  destroy(id: number) {
    return request({
      url: `/api/admin/admins/${id}`,
      method: 'delete',
    });
  },

};

export default admins;
