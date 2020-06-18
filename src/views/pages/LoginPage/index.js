import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { loginUser } from '../../../actions'

const LoginPage = (props) => {
    const dispatch = useDispatch()
    const { authOk, authErr } = useSelector(state => state.loginReducer)

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const userNameListener = (e) => {
        setUserName(e.target.value)
    }

    const passwordListener = (e) => {
        setPassword(e.target.value)
    }

    const submitButton = (e) => {
        e.preventDefault()
        
        dispatch(loginUser({ username, password }))
    }

    if (authOk) {
        return <Redirect to='/login_page' />
    }

    return (
        <form id='loginForm'>
            <label htmlFor='userName'>
                Please write your User Name
            </label>
            <input
                type='text'
                name='userName'
                id='userName'
                value={username}
                onChange={userNameListener}
            />
            <label htmlFor='password'>
                Please write your Password
            </label>
            <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={passwordListener}
            />
            {authErr &&
                <p className='error-row'>
                    Bad credentials, please type on correct one
                </p>
            }
            <button
                className='submit-button'
                onClick={submitButton}
            >
                Log in
            </button>
        </form>
    )
}

export default LoginPage