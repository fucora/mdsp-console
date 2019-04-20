import request from '@/utils/request'

export function listTopic(query) {
  return request({
    url: '/litemall/topic/list',
    method: 'get',
    params: query
  })
}

export function createTopic(data) {
  return request({
    url: '/litemall/topic/create',
    method: 'post',
    data
  })
}

export function readTopic(data) {
  return request({
    url: '/litemall/topic/read',
    method: 'get',
    data
  })
}

export function updateTopic(data) {
  return request({
    url: '/litemall/topic/update',
    method: 'post',
    data
  })
}

export function deleteTopic(data) {
  return request({
    url: '/litemall/topic/delete',
    method: 'post',
    data
  })
}
