import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginUser } from '../../../actions'

const mapStateToProps = (state) => {
    return {
        loginState: state.loginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user))
    }
}


const LoginPage = (props) => {
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
        props.loginUser({ username, password })
    }

    const { authOk, authErr } = props.loginState

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)