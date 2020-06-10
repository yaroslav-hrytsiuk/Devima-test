const client_id = 2
const client_secret = 'A70gUEybx2na3RqMIvpbasaWJCLIKEF6Q1FpIpo3'

export const apiUrl = 'https://staging.devima.solutions'

export const apiParams = {
    login: {
        grant_type: 'password',
        client_id: client_id,
        client_secret: client_secret
    },

    refreshToken: {
        grant_type: 'refresh_token',
        client_id: client_id,
        client_secret: client_secret
    }
}