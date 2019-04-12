import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import Router from 'next/router'
import Head from '../src/components/head'

import './app.css'
import '../src/forms.css'
import '../src/toasts.css'
import { ToastContainer } from 'react-toastify'
import withReduxStore from '../src/lib/withReduxStore'

class UA extends App {
  // to call getInitialProps in children component
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Head />
          <ToastContainer
            autoClose={2000}
            hideProgressBar
            pauseOnHover={false}
            draggable={false}
            closeButton={false}
          />
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(UA)

// Fix confliting CSS Loader
Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]')
    const timestamp = new Date().valueOf()
    els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp
  }
})
