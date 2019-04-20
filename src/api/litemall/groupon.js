import request from '@/utils/request'

export function listRecord(query) {
  return request({
    url: '/litemall/groupon/listRecord',
    method: 'get',
    params: query
  })
}

export function listGroupon(query) {
  return request({
    url: '/litemall/groupon/list',
    method: 'get',
    params: query
  })
}

export function deleteGroupon(data) {
  return request({
    url: '/litemall/groupon/delete',
    method: 'post',
    data
  })
}

export function publishGroupon(data) {
  return request({
    url: '/litemall/groupon/create',
    method: 'post',
    data
  })
}

export function editGroupon(data) {
  return request({
    url: '/litemall/groupon/update',
    method: 'post',
    data
  })
}
