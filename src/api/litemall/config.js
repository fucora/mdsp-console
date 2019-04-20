import request from '@/utils/request'

export function listMall() {
  return request({
    url: '/litemall/config/mall',
    method: 'get'
  })
}

export function updateMall(data) {
  return request({
    url: '/litemall/config/mall',
    method: 'post',
    data
  })
}

export function listExpress() {
  return request({
    url: '/litemall/config/express',
    method: 'get'
  })
}

export function updateExpress(data) {
  return request({
    url: '/litemall/config/express',
    method: 'post',
    data
  })
}

export function listOrder() {
  return request({
    url: '/litemall/config/order',
    method: 'get'
  })
}

export function updateOrder(data) {
  return request({
    url: '/litemall/config/order',
    method: 'post',
    data
  })
}

export function listWx() {
  return request({
    url: '/litemall/config/wx',
    method: 'get'
  })
}

export function updateWx(data) {
  return request({
    url: '/litemall/config/wx',
    method: 'post',
    data
  })
}
