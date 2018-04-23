export const SET_TOKEN = 'login/SET_TOKEN'

const initialState = {
  token: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        token: action.payload
      }
    default:
      return state
  }
}

export const autoLogin = () => {
  return async dispatch => {
    if (localStorage.hasOwnProperty('arena-2018-token')) {
      dispatch({
        type: SET_TOKEN,
        payload: localStorage.getItem('arena-2018-token')
      })
    }
  }
}

export const login = (token) => {
  return async dispatch => {
    dispatch({
      type: SET_TOKEN,
      payload: token
    })

    localStorage.setItem('arena-2018-token', token)
  }
}
