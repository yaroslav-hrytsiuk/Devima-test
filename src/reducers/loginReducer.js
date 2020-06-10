import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS
} from '../actions'

const initialState = {
    authOk: false,
    authErr: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                authOk: false
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                authOk: true,
                authErr: false
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                authOk: false,
                authErr: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                authOk: false
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                authOk: false
            }
        default:
            return state
    }
}

export default loginReducer