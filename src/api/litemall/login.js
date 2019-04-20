import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/litemall/auth/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/litemall/auth/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/litemall/auth/info',
    method: 'get',
    params: { token }
  })
}

