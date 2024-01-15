import request from '@/utils/request'

export const login = data => {
    return request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data
    })
}