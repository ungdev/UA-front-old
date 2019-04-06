import axios from '../lib/axios'
import errorToString from '../lib/errorToString'
import { fetchUser } from './user'

import { toast } from 'react-toastify'
export const SET_SPOTLIGHTS = 'spotlights/SET_SPOTLIGHTS'
import { push } from './router'

const initialState = {
  spotlights: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTLIGHTS:
      return {
        spotlights: action.payload
      }
    default:
      return state
  }
}

export const fetchSpotlights = () => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    const spotlights = await axios.get('spotlights', { headers: { 'X-Token': authToken } })

    dispatch({
      type: SET_SPOTLIGHTS,
      payload: spotlights.data
    })
  }
}

export const joinSolo = spotlight => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    try {
      await axios.post(`/spotlight/${spotlight}/join`, {}, { headers: { 'X-Token': authToken } })

      await dispatch(fetchUser())
      dispatch(push('/dashboard'))
    } catch (err) {
      console.log(err)
      toast.error(errorToString(err.response.data.error))
    }
  }
}
