import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import canLogin from './canLogin'
import login from './login'
import register from './register'
import user from './user'
import payment from './payment'
import teams from './teams'
import spotlights from './spotlights'
import forgot from './forgot'

export default combineReducers({
  routing: routerReducer,
  canLogin,
  login,
  register,
  user,
  payment,
  teams,
  spotlights,
  forgot
})
