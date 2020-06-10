import { call, put, takeLatest, fork } from 'redux-saga/effects'

import {
    loginUserSuccess,
    loginUserError,
    logoutUserSuccess,
    getUsersSuccess
} from '../actions'
import api from '../Api'

function* login(action) {
    try {
        const token = yield call(api.loginUser, action.user)

        yield localStorage.setItem('token', token.access_token.toString())
        yield localStorage.setItem('refresh-token', token.refresh_token.toString())
        yield put(loginUserSuccess())
    } catch (error) {
        yield put(loginUserError(error.message))
    }
}

function* logout() {
    try {
        yield localStorage.clear()
        yield put(logoutUserSuccess())
    } catch (error) {
        console.log(error)
    }
}

function* getUsers() {
    try {
        const token = yield localStorage.getItem('token')
        const usersList = yield call(api.getUsers, token)

        yield put(getUsersSuccess(usersList))
    } catch (e) {
        yield fork(refreshToken)
    }
}

function* refreshToken() {
    try {
        const token = localStorage.getItem('refresh-token')
        const tokenData = yield call(api.refreshToken, token)

        yield localStorage.setItem('token', tokenData.access_token.toString())
        yield localStorage.setItem('refresh-token', tokenData.refresh_token.toString())
        yield fork(getUsers)
    } catch (e) {
        yield fork(logout)
    }
}

function* saga() {
    yield takeLatest('LOGIN_USER', login)
    yield takeLatest('LOGOUT_USER', logout)
    yield takeLatest('GET_USERS', getUsers)
}

export default saga