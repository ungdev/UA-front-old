import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './modules'

const logger = createLogger({ collapsed: true })

export const initStore = () => createStore(rootReducer, applyMiddleware(thunk, logger))
