import axios from '../lib/axios'
import { logout, SET_TOKEN } from './login'

export const SET_USER = 'user/SET_USER'
export const SET_SPOTLIGHTS = 'user/SET_SPOTLIGHTS'
export const SET_TEAMS = 'user/SET_TEAMS'

const initialState = {
  user: null,
  spotlights: null,
  teams: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload
      }
    default:
      return state
  }
}

export const updateUser = () => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      const res = await axios.get('user', { headers: { 'X-Token': authToken }})

      dispatch({
        type: SET_USER,
        payload: res.data.user
      })

      dispatch({
        type: SET_TOKEN,
        payload: res.data.token
      })

      dispatch({
        type: SET_SPOTLIGHTS,
        payload: res.data.spotlights
      })

      dispatch({
        type: SET_TEAMS,
        payload: res.data.teams
      })
    } catch (err) {
      dispatch(logout())
    }
  }
}
