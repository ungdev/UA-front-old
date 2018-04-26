import axios from '../lib/axios'
import { saveToken } from './login'

export const SET_SUCCESS = 'register/SET_SUCCESS'
export const SET_ERROR = 'register/SET_ERROR'

const initialState = {
  success: null,
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

const fail = (dispatch, err) => {
  dispatch({
    type: SET_SUCCESS,
    payload: false
  })

  dispatch({
    type: SET_ERROR,
    payload: err
  })

  setTimeout(
    () =>
      dispatch({
        type: SET_ERROR,
        payload: ''
      }),
    2000
  )
}

export const register = user => {
  return async dispatch => {
    if (user.password !== user.password2) {
      return fail(dispatch, 'PASSWORD_MISMATCH')
    }

    try {
      const res = await axios.post('user', user)

      dispatch(saveToken(res.data.token)).then(() => {
        location.href = '/dashboard' // eslint-disable-line no-restricted-globals
      })
    } catch (err) {
      fail(dispatch, err.response.data.error)
    }
  }
}
