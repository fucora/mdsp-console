import request from '@/utils/request'

export function listGoods(query) {
  return request({
    url: '/litemall/goods/list',
    method: 'get',
    params: query
  })
}

export function deleteGoods(data) {
  return request({
    url: '/litemall/goods/delete',
    method: 'post',
    data
  })
}

export function publishGoods(data) {
  return request({
    url: '/litemall/goods/create',
    method: 'post',
    data
  })
}

export function detailGoods(id) {
  return request({
    url: '/litemall/goods/detail',
    method: 'get',
    params: { id }
  })
}

export function editGoods(data) {
  return request({
    url: '/litemall/goods/update',
    method: 'post',
    data
  })
}

export function listCatAndBrand() {
  return request({
    url: '/litemall/goods/catAndBrand',
    method: 'get'
  })
}
