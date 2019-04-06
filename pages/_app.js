import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../src/store'
import Router from 'next/router'
import Head from '../src/components/head'

import 'react-toastify/dist/ReactToastify.css'
import './app.css'
import './forms.css'
import { ToastContainer } from 'react-toastify'

export default withRedux(initStore)(
  class MyApp extends App {
    // to call getInitialProps in children component (just first component imo)
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
)

// Fix confliting CSS Loader
Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]')
    const timestamp = new Date().valueOf()
    els[0].href = '/_next/static/css/styles.chunk.css?v=' + timestamp
  }
})
