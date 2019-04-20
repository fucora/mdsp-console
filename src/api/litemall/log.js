import request from '@/utils/request'

export function listLog(query) {
  return request({
    url: '/litemall/log/list',
    method: 'get',
    params: query
  })
}
