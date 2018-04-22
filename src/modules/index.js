import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import canLogin from './canLogin'

export default combineReducers({
  routing: routerReducer,
  canLogin
})
