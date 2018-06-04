import axios from '../lib/axios'
import fail from '../lib/store.fail'
import { saveToken } from './login'

export const SET_REGISTER_SUCCESS = 'register/SET_REGISTER_SUCCESS'
export const SET_REGISTER_ERROR = 'register/SET_REGISTER_ERROR'
export const SET_VALIDATE_SUCCESS = 'register/SET_VALIDATE_SUCCESS'
export const SET_VALIDATE_ERROR = 'register/SET_VALIDATE_ERROR'

const initialState = {
  registerSuccess: null,
  registerErrorMessage: '',
  validateSuccess: null,
  validateErrorMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: action.payload
      }
    case SET_REGISTER_ERROR:
      return {
        ...state,
        registerErrorMessage: action.payload
      }
    case SET_VALIDATE_SUCCESS:
      return {
        ...state,
        validateSuccess: action.payload
      }
    case SET_VALIDATE_ERROR:
      return {
        ...state,
        validateErrorMessage: action.payload
      }
    default:
      return state
  }
}

export const register = user => {
  return async dispatch => {
    if (user.password !== user.password2) {
      return fail(dispatch, 'PASSWORD_MISMATCH')
    }

    try {
      await axios.post('user', user)

      dispatch({
        type: SET_REGISTER_SUCCESS,
        payload: true
      })
    } catch (err) {
      return fail({
        dispatch,
        mutationSuccess: SET_REGISTER_SUCCESS,
        mutationError: SET_REGISTER_ERROR,
        err: err.response.data.error
      })
    }
  }
}

export const validate = token => {
  return async dispatch => {
    try {
      const res = await axios.post('user/validate', { token })

      dispatch(saveToken(res.data.token)).then(() => {
        dispatch({
          type: SET_VALIDATE_SUCCESS,
          payload: true
        })
      })
    } catch (err) {
      return fail({
        dispatch,
        mutationSuccess: SET_VALIDATE_SUCCESS,
        mutationError: SET_VALIDATE_ERROR,
        err: err.response.data.error
      })
    }
  }
}
