import axios from '../lib/axios'
import fail from '../lib/store.fail'

export const SET_SUCCESS = 'payment/SET_SUCCESS'
export const SET_ERROR = 'payment/SET_ERROR'

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

export const payment = basket => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token

    if (!authToken || authToken.length === 0) {
      return
    }

    console.log(basket)

    try {
      const res = await axios.post('user/pay', basket, { headers: { 'X-Token': authToken } })

      if (res.status === 200 && !res.body.error) {
        location.href = res.body.url // eslint-disable-line no-restricted-globals
      }
    } catch (err) {
      return fail({
        dispatch,
        mutationSuccess: SET_SUCCESS,
        mutationError: SET_ERROR,
        err: err.response.data.error
      })
    }
  }
}
