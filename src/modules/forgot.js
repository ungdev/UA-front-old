import axios from '../lib/axios'

export const SET_SUCCESS = 'forgot/SET_SUCCESS'
export const SET_ERROR = 'forgot/SET_ERROR'

const initialState = {
  success: false,
  error: null
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
        error: action.payload
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

  return Promise.reject(err)
}

export const sendResetMail = ({ email }) => {
  return async dispatch => {
    try {
      await axios.post('user/reset', { email })

      dispatch({
        type: SET_SUCCESS,
        payload: true
      })

      setTimeout(() => {
        dispatch({
          type: SET_SUCCESS,
          payload: false
        })
      }, 2000)
    } catch (err) {
      return fail(dispatch, err.response.data.error)
    }
  }
}

export const resetPassword = resetInfos => {
  return async (dispatch, getState) => {
    if (resetInfos.password !== resetInfos.password2) {
      return fail(dispatch, 'PASSWORD_MISMATCH')
    }

    try {
      const res = await axios.put('user/reset', resetInfos)

      dispatch({
        type: SET_SUCCESS,
        payload: true
      })

      setTimeout(() => {
        dispatch({
          type: SET_SUCCESS,
          payload: false
        })
      }, 2000)
    } catch (err) {
      return fail(dispatch, err.response.data.error)
    }
  }
}
