import Router from 'next/router'

export const ROUTER_PUSH = 'router/ROUTER_PUSH'
export const ROUTER_BACK = 'router/ROUTER_BACK'
export const LOCATION_CHANGED = 'router/LOCATION_CHANGED'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case ROUTER_PUSH:
      Router.push(action.payload)
      return state

    case ROUTER_BACK:
      Router.back()
      return state

    default:
      return state
  }
}

export const push = url => {
  return {
    type: ROUTER_PUSH,
    payload: url
  }
}

export const goBack = url => {
  return {
    type: ROUTER_BACK,
    payload: url
  }
}
