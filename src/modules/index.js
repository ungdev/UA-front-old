import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import canLogin from './canLogin'
import login from './login'
import register from './register'
import user from './user'
import payment from './payment'

export default combineReducers({
  routing: routerReducer,
  canLogin,
  login,
  register,
  user,
  payment
})
