import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/litemall/user/list',
    method: 'get',
    params: query
  })
}

export function listAddress(query) {
  return request({
    url: '/litemall/address/list',
    method: 'get',
    params: query
  })
}

export function listCollect(query) {
  return request({
    url: '/litemall/collect/list',
    method: 'get',
    params: query
  })
}

export function listFeedback(query) {
  return request({
    url: '/litemall/feedback/list',
    method: 'get',
    params: query
  })
}

export function listFootprint(query) {
  return request({
    url: '/litemall/footprint/list',
    method: 'get',
    params: query
  })
}

export function listHistory(query) {
  return request({
    url: '/litemall/history/list',
    method: 'get',
    params: query
  })
}

