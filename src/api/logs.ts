import request from "@/utils/request";

const logs = {

  index(params: any) {
    return request({
      url: `/api/admin/logs`,
      method: 'get',
      params: params
    });
  },

  store(data: any) {
    return request({
      url: `/api/admin/logs`,
      method: 'post',
      data: data,
    });
  },

  show(id: number) {
    return request({
      url: `/api/admin/logs/${id}`,
      method: 'get',
    });
  },

  update(id:number, data: any) {
    return request({
      url: `/api/admin/logs/${id}`,
      method: 'put',
      data: data,
    });
  },

  destroy(id: number) {
    return request({
      url: `/api/admin/logs/${id}`,
      method: 'delete',
    });
  },

};

export default logs;
