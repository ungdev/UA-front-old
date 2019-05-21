import axios from '../lib/axios'
import fail from '../lib/store.fail'
import errorToString from '../lib/errorToString'

import { toast } from 'react-toastify'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const sendResetMail = ({ email }) => {
  return async dispatch => {
    try {
      await axios.post('user/reset', { email })
      toast.success('Mail envoyé avec succès')
    } catch (err) {
      console.log(err.response.data)
      toast.error(errorToString(err.response.data.error))
    }
  }
}

export const resetPassword = resetInfos => {
  return async (dispatch, getState) => {
    if (resetInfos.password !== resetInfos.password2) {
      return fail(dispatch, 'PASSWORD_MISMATCH')
    }

    try {
      await axios.put('user/reset', resetInfos)
      toast.success('Mot de passe changé')
    } catch (err) {
      console.log(err.response.data)
      toast.error(errorToString(err.response.data.error))
    }
  }
}
