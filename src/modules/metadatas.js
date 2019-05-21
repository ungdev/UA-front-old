export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

const initialState = {
  metadatas: {
    url: null,
    title: null,
    description: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        metadatas: {
          url: process.env.REACT_APP_CANONICAL_URL + action.payload.pathname
        }
      }
    default:
      return state
  }
}
