import request from '@/utils/request'
import Qs from 'qs'

export function listOrder(query) {
  return request({
    url: '/litemall/order/list',
    method: 'get',
    params: query,
    paramsSerializer: function(params) {
      return Qs.stringify(params, { arrayFormat: 'repeat' })
    }
  })
}

export function detailOrder(id) {
  return request({
    url: '/litemall/order/detail',
    method: 'get',
    params: { id }
  })
}

export function shipOrder(data) {
  return request({
    url: '/litemall/order/ship',
    method: 'post',
    data
  })
}

export function refundOrder(data) {
  return request({
    url: '/litemall/order/refund',
    method: 'post',
    data
  })
}

export function replyComment(data) {
  return request({
    url: '/litemall/order/reply',
    method: 'post',
    data
  })
}
