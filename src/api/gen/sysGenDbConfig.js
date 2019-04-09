import request from '@/utils/request'

export function pageSysGenDbConfigApi(query) {
  return request({
    url: '/gen/sysGenDbConfig/page',
    method: 'get',
    params: query
  })
}

export function addSysGenDbConfigApi(obj) {
  return request({
    url: '/gen/sysGenDbConfig/add',
    method: 'post',
    data: obj
  })
}

export function getSysGenDbConfigApi(id) {
  return request({
    url: '/gen/sysGenDbConfig/get?id=' + id,
    method: 'get'
  })
}

export function delSysGenDbConfigApi(id) {
  return request({
    url: '/gen/sysGenDbConfig/delete?id=' + id,
    method: 'post'
  })
}

export function updateSysGenDbConfigApi(obj) {
  return request({
    url: '/gen/sysGenDbConfig/update',
    method: 'post',
    data: obj
  })
}

