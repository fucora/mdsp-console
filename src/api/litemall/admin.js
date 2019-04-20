import request from '@/utils/request'

export function listAdmin(query) {
  return request({
    url: '/litemall/admin/list',
    method: 'get',
    params: query
  })
}

export function createAdmin(data) {
  return request({
    url: '/litemall/admin/create',
    method: 'post',
    data
  })
}

export function readminAdmin(data) {
  return request({
    url: '/litemall/admin/readmin',
    method: 'get',
    data
  })
}

export function updateAdmin(data) {
  return request({
    url: '/litemall/admin/update',
    method: 'post',
    data
  })
}

export function deleteAdmin(data) {
  return request({
    url: '/litemall/admin/delete',
    method: 'post',
    data
  })
}
