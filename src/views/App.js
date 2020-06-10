import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

import LoginPage from './pages/LoginPage'
import UsersList from './pages/UsersList'
import PrivateRoute from './components/PrivatRoute'
import './App.scss'

const mapStateToProps = state => {
  return {
    authOk: state.loginReducer.authOk
  }
}

const App = (props) => {
  const token = localStorage.getItem('token')

  return (
    <div className='main-block'>
      <Router>
        <Switch>
          <Redirect
            exact
            from='/'
            to='/login_page'
          />
          {token || props.authOk ?
            <Redirect
              exact
              from='/login_page'
              to='/users_list'
            /> :
            <Redirect
              exact
              from='/users_list'
              to='/login_page'
            />
          }
          <PrivateRoute
            path='/users_list'
            exact
            component={UsersList}
            token={token}
          />
          <Route
            path='/login_page'
            exact
            component={LoginPage}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default connect(mapStateToProps, null)(App)
