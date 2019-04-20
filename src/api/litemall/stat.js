import request from '@/utils/request'

export function statUser(query) {
  return request({
    url: '/litemall/stat/user',
    method: 'get',
    params: query
  })
}

export function statOrder(query) {
  return request({
    url: '/litemall/stat/order',
    method: 'get',
    params: query
  })
}

export function statGoods(query) {
  return request({
    url: '/litemall/stat/goods',
    method: 'get',
    params: query
  })
}
