import axios from '../lib/axios'
import errorToString from '../lib/errorToString'
import { actions as notifActions } from 'redux-notifications'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const shop = basket => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token
    if (!authToken || authToken.length === 0) {
      return
    }
    try {
      const res = await axios.post('user/shop', basket, { headers: { 'X-Token': authToken } })
      if (res.status === 200) {
        location.href = res.data.url // eslint-disable-line no-restricted-globals
      }
    } catch (err) {
      console.log(err.response)
      dispatch(
        notifActions.notifSend({
          message: errorToString(err.response.data.error),
          kind: 'danger',
          dismissAfter: 2000
        })
      )
    }
  }
}
