import axios from '../lib/axios'
import errorToString from '../lib/errorToString'

import { toast } from 'react-toastify'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// todo: a tester: erreurs potientielles
export const sendMessage = user => {
  return async () => {
    if (!user.message || user.message.length < 50) {
      return toast.error('Votre message doit comporter au moins 50 caractères')
    }
    if (user.message.length > 5000) {
      return toast.error('Votre message doit comporter moins de 5000 caractères')
    }
    try {
      await axios.post('publicSlack', { user })
      toast.success('Message envoyé')
    } catch (err) {
      toast.error(errorToString(err.response.data.error))
    }
  }
}
