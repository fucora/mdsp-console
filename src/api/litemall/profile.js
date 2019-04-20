import request from '@/utils/request'

export function changePassword(data) {
  return request({
    url: '/litemall/profile/password',
    method: 'post',
    data
  })
}
