import axios from '../lib/axios'

export const SET_SPOTLIGHTS = 'spotlights/SET_SPOTLIGHTS'

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
