import axios from '../lib/axios'
import { push } from 'react-router-redux'
import { fetchUser, SET_USER, SET_PRICES } from './user'
import { SET_TEAMS } from './teams'
import { SET_SPOTLIGHTS } from './spotlights'

export const SET_TOKEN = 'login/SET_TOKEN'
export const SET_SUCCESS = 'login/SET_SUCCESS'
export const SET_ERROR = 'login/SET_ERROR'

const initialState = {
  token: null,
  success: null,
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

const fail = (dispatch, err) => {
  dispatch({
    type: SET_SUCCESS,
    payload: false
  })

  dispatch({
    type: SET_ERROR,
    payload: err
  })

  setTimeout(
    () =>
      dispatch({
        type: SET_ERROR,
        payload: ''
      }),
    2000
  )

  return Promise.reject(err)
}

export const autoLogin = () => {
  return async dispatch => {
    if (localStorage.hasOwnProperty('arena-2018-token')) {
      dispatch({
        type: SET_TOKEN,
        payload: localStorage.getItem('arena-2018-token')
      })

      return dispatch(fetchUser())
    } else {
      return dispatch(logout())
    }
  }
}

export const tryLogin = user => {
  return async dispatch => {
    try {
      const res = await axios.put('user/login', user)

      dispatch(saveToken(res.data.token))
      dispatch(push('/dashboard'))
    } catch (err) {
      return fail(dispatch, err.response.data.error)
    }
  }
}

export const saveToken = token => {
  return async dispatch => {
    dispatch({
      type: SET_TOKEN,
      payload: token
    })

    localStorage.setItem('arena-2018-token', token)
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch({ type: SET_TOKEN, payload: null })
    dispatch({ type: SET_USER, payload: null })
    dispatch({ type: SET_SPOTLIGHTS, payload: null })
    dispatch({ type: SET_TEAMS, payload: null })
    dispatch({ type: SET_PRICES, payload: null })

    localStorage.removeItem('arena-2018-token')

    return dispatch(push('/'))
  }
}
