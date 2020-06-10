import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, token, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                token ?
                    <Component {...props} /> :
                    <Redirect to='login_page' />
            }
        />
    )
}

export default PrivateRoute
