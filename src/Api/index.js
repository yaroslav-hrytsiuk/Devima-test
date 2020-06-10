import axios from 'axios'
import { apiUrl, apiParams } from '../config'

class Api {
    loginUser(user) {
        const params = {
            ...apiParams.login,
            ...user
        }

        return axios.post(`${apiUrl}/api/token`, params).then(res => res.data)
    }

    refreshToken(token) {
        const params = {
            ...apiParams.refreshToken,
            refresh_token: token
        }

        return axios.post(`${apiUrl}/api/token`, params).then(res => res.data)
    }

    getUsers(token) {
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        }

        return axios.get(`${apiUrl}/api/users`, params).then((res) => res.data)
    }
}

export default new Api()