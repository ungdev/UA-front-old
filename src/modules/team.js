import axios from '../lib/axios'

import { fetchUser } from './user'

export const SET_CANCELREQUEST_ERROR = 'user/SET_CANCELREQUEST_ERROR'

const initialState = {
  cancelRequestError: null
}

export const cancelRequest = (id) => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      const res = await axios.delete(`/team/${id}/cancelRequest`, { headers: { 'X-Token': authToken }})

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
