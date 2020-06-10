import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import getUsersReducer from './reducers/getUsersReducer'
import loginReducer from './reducers/loginReducer'
import saga from './sagas'

import App from './views/App'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    getUsersReducer,
    loginReducer
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)