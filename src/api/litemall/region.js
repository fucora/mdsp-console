import request from '@/utils/request'

export function listRegion() {
  return request({
    url: '/litemall/region/list',
    method: 'get'
  })
}

export function listSubRegion(query) {
  return request({
    url: '/litemall/region/clist',
    method: 'get',
    params: query
  })
}
