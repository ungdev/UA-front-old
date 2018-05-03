import axios from '../lib/axios'
import { push } from 'react-router-redux'

import { fetchUser } from './user'

export const SET_CANCELREQUEST_ERROR = 'user/SET_CANCELREQUEST_ERROR'
export const SET_CREATETEAM_ERROR = 'user/SET_CREATETEAM_ERROR'

const initialState = {
  cancelRequestError: null,
  createTeamError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CANCELREQUEST_ERROR:
      return {
        ...state,
        cancelRequestError: action.payload
      }
    case SET_CREATETEAM_ERROR:
      return {
        ...state,
        createTeamError: action.payload
      }
    default:
      return state
  }
}

export const cancelRequest = id => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      await axios.delete(`/team/${id}/cancelRequest`, { headers: { 'X-Token': authToken } })

      dispatch(fetchUser())
    } catch (err) {
      dispatch({
        type: SET_CANCELREQUEST_ERROR,
        payload: err.response.data.error
      })

      setTimeout(() => {
        dispatch({
          type: SET_CANCELREQUEST_ERROR,
          payload: null
        })
      }, 2000)

      return Promise.reject()
    }
  }
}

export const createTeam = ({ name }) => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      await axios.post(`/team`, { name }, { headers: { 'X-Token': authToken } })

      dispatch(fetchUser())
      dispatch(push('/dashboard'))
    } catch (err) {
      dispatch({
        type: SET_CREATETEAM_ERROR,
        payload: err.response.data.error
      })

      setTimeout(() => {
        dispatch({
          type: SET_CREATETEAM_ERROR,
          payload: null
        })
      }, 2000)

      return Promise.reject()
    }
  }
}
