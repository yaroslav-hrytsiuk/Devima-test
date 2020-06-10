import {
    GET_USERS,
    GET_USERS_SUCCESS
} from '../actions'

const initialState = {
    users: [],
    isLoading: false
}

const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                isLoading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                isLoading: false
            }
        default:
            return state
    }
}

export default getUsersReducer