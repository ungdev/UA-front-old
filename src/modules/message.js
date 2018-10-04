import axios from '../lib/axios'
import fail from '../lib/store.fail'
import errorToString from '../lib/errorToString'
import { actions as notifActions } from 'redux-notifications'
import { saveToken } from './login'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const sendMessage = user => {
  return async dispatch => {
    if(user.message.length < 50) {
      return dispatch(
        notifActions.notifSend({
          message: 'Votre message doit comporter au moins 50 caractères',
          kind: 'danger',
          dismissAfter: 2000
        })
      )
    }
    if(user.message.length > 5000) {
      return dispatch(
        notifActions.notifSend({
          message: 'Votre message doit comporter moins de 5000 caractères',
          kind: 'danger',
          dismissAfter: 2000
        })
      )
    }
    try {
      await axios.post('publicSlack', { user })

      dispatch(
        notifActions.notifSend({
          message: 'Message envoyé',
          dismissAfter: 2000
        })
      )
    } catch (err) {
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

export const validate = token => {
  return async dispatch => {
    try {
      const res = await axios.post('user/validate', { token })

      await dispatch(saveToken(res.data.token))

      dispatch(
        notifActions.notifSend({
          message: 'Inscription validée',
          dismissAfter: 2000
        })
      )
    } catch (err) {
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
