import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import canLogin from './canLogin'
import login from './login'
import register from './register'

export default combineReducers({
  routing: routerReducer,
  canLogin,
  login,
  register
})
