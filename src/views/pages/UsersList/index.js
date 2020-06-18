import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getUsers, logoutUser } from '../../../actions'
import Loader from '../../components/Loader'

const UsersList = (props) => {
    const dispatch = useDispatch()
    const { users, isLoading } = useSelector(state => state.getUsersReducer)

    useEffect(() => {
        const token = localStorage.getItem('token')
        token && dispatch(getUsers())
    }, [dispatch])


    const getAllUsers = () => {
        return (
            users.length && users.map(el =>
                <li key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.email}</p>
                    <p>{el.created_at}</p>
                </li>
            )
        )
    }

    const refreshUsers = () => {
        const token = localStorage.getItem('token')

        if (token) {
            dispatch(getUsers())
        } else {
            return (
                <Redirect
                    exact
                    from='/users_list'
                    to='/'
                />
            )
        }

    }

    const logoutCurrent = () => {
        dispatch(logoutUser())

        return (
            <Redirect
                exact
                from='/users_list'
                to='/'
            />
        )
    }

    return (
        isLoading ?
            <Loader /> :
            <div className='list-block'>
                <div className='list-block-header'>
                    <button
                        className='submit-button'
                        onClick={refreshUsers}
                    >
                        Refresh
                    </button>
                    <button
                        className='submit-button'
                        onClick={logoutCurrent}
                    >
                        Log Out
                    </button>
                </div>
                <ul className='user-list'>
                    <h2>Users List</h2>
                    <div className='user-list-head'>
                        <p>Name</p>
                        <p>User Email</p>
                        <p>Date of creating</p>
                    </div>
                    {getAllUsers()}
                </ul>
            </div>
    )
}

export default UsersList