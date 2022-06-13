

import request from '@/utils/request';

// 获取用户列表
export function getUserList(data) {
  return request({ url: '/getServiceList', method: 'get', data })
}