import request from '@/utils/request'

export function info(query) {
  return request({
    url: '/litemall/dashboard',
    method: 'get',
    params: query
  })
}
