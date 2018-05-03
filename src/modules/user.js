import axios from '../lib/axios'
import { logout, SET_TOKEN } from './login'

export const SET_USER = 'user/SET_USER'
export const SET_SPOTLIGHTS = 'user/SET_SPOTLIGHTS'
export const SET_TEAMS = 'user/SET_TEAMS'
export const SET_PRICES = 'user/SET_PRICES'
export const SET_EDIT_ERROR = 'user/SET_EDIT_ERROR'
export const SET_EDIT_SUCCESS = 'user/SET_EDIT_SUCCESS'

const initialState = {
  user: null,
  spotlights: null,
  teams: null,
  prices: null,
  editSuccess: false,
  editError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_EDIT_ERROR:
      return {
        ...state,
        editError: action.payload
      }
    case SET_EDIT_SUCCESS:
      return {
        ...state,
        editSuccess: action.payload
      }
    case SET_SPOTLIGHTS:
      return {
        ...state,
        spotlights: action.payload
      }
    case SET_TEAMS:
      return {
        ...state,
        teams: action.payload
      }
    case SET_PRICES:
      if (!action.payload) {
        return state
      }

      const prices = {}

      for (let [key, value] of Object.entries(action.payload)) {
        prices[key] = parseFloat(value)
      }

      prices.partners = action.payload.partners.split(',')

      return {
        ...state,
        prices
      }
    default:
      return state
  }
}

export const fetchUser = () => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      const res = await axios.get('user', { headers: { 'X-Token': authToken } })

      dispatch({ type: SET_USER, payload: res.data.user })
      dispatch({ type: SET_TOKEN, payload: res.data.token })
      dispatch({ type: SET_SPOTLIGHTS, payload: res.data.spotlights })
      dispatch({ type: SET_TEAMS, payload: res.data.teams })
      dispatch({ type: SET_PRICES, payload: res.data.prices })
    } catch (err) {
      dispatch(logout())
    }
  }
}

export const editUser = newUserData => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      const res = await axios.put('user', newUserData, { headers: { 'X-Token': authToken } })

      dispatch({
        type: SET_USER,
        payload: res.data.user
      })

      dispatch({
        type: SET_EDIT_SUCCESS,
        payload: true
      })

      setTimeout(() => {
        dispatch({
          type: SET_EDIT_SUCCESS,
          payload: false
        })
      }, 2000)
    } catch (err) {
      dispatch({
        type: SET_EDIT_ERROR,
        payload: err.response.data.error
      })

      setTimeout(() => {
        dispatch({
          type: SET_EDIT_ERROR,
          payload: null
        })
      }, 2000)

      return Promise.reject()
    }
  }
}
