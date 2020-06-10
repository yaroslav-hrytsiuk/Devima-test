// Actions

// Get Users actions

export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

// Login/Logout actions

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'


// Action creators 

// Get users

export const getUsers = () => {
    return {
        type: GET_USERS
    }
}

export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        users
    }
}

// Login user

export const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        user
    }
}

export const loginUserSuccess = () => {
    return {
        type: LOGIN_USER_SUCCESS
    }
}

export const loginUserError = (error) => {
    return {
        type: LOGIN_USER_ERROR,
        error
    }
}

// Logout user

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER_SUCCESS
    }
}