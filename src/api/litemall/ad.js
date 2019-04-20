import request from '@/utils/request'

export function listAd(query) {
  return request({
    url: '/litemall/ad/list',
    method: 'get',
    params: query
  })
}

export function createAd(data) {
  return request({
    url: '/litemall/ad/create',
    method: 'post',
    data
  })
}

export function readAd(data) {
  return request({
    url: '/litemall/ad/read',
    method: 'get',
    data
  })
}

export function updateAd(data) {
  return request({
    url: '/litemall/ad/update',
    method: 'post',
    data
  })
}

export function deleteAd(data) {
  return request({
    url: '/litemall/ad/delete',
    method: 'post',
    data
  })
}
