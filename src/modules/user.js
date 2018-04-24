import axios from '../lib/axios'
import { logout } from './login'

export const SET_USER = 'user/SET_USER'

const initialState = {
  user: null
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
    const token = getState().login.token

    if (!token || token.length === 0) {
      return
    }

    try {
      const { user, token, spotlights, teams, teamfinders } = await axios.get('user')

      console.log(user, token, spotlights, teams, teamfinders)
    } catch (err) {
      dispatch(logout())
    }
  }
}
