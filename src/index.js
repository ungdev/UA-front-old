import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import App from './containers/app'

import './index.css'
import './forms.css'

const target = document.querySelector('#root')

const store = configureStore()

const rerender = () =>
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>,
    target
  )

rerender()

if (module.hot) {
  module.hot.accept('./containers/app', rerender)
}

registerServiceWorker()
