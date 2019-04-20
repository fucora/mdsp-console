import request from '@/utils/request'

export function listRole(query) {
  return request({
    url: '/litemall/role/list',
    method: 'get',
    params: query
  })
}

export function createRole(data) {
  return request({
    url: '/litemall/role/create',
    method: 'post',
    data
  })
}

export function readRole(data) {
  return request({
    url: '/litemall/role/read',
    method: 'get',
    data
  })
}

export function updateRole(data) {
  return request({
    url: '/litemall/role/update',
    method: 'post',
    data
  })
}

export function deleteRole(data) {
  return request({
    url: '/litemall/role/delete',
    method: 'post',
    data
  })
}

export function getPermission(query) {
  return request({
    url: '/litemall/role/permissions',
    method: 'get',
    params: query
  })
}

export function updatePermission(data) {
  return request({
    url: '/litemall/role/permissions',
    method: 'post',
    data
  })
}

export function roleOptions(query) {
  return request({
    url: '/litemall/role/options',
    method: 'get',
    params: query
  })
}
