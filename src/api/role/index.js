

import request from '@/utils/request'

// 获取用户列表
export function getRoleList(data) {
  return request({
    url: '/getServiceList',
    method: 'get',
    data
  })
}