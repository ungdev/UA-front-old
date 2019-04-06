import Head from 'next/head'
import React from 'react'

export default () => (
  <Head>
    <title>{process.env.REACT_APP_WEBSITE_NAME}</title>

    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content={process.env.REACT_APP_WEBSITE_DESCRIPTION} />
    <meta name="google-site-verification" content="icxJTeUgAR7B0GcltkRDyDJ_amDjL8_ivjVaSIjoHho" />
    <meta name="google-site-verification" content="suqaF3srz4mNjH5ERQisNQL6DdVLkqrczyOB6NiR42E" />

    <link rel="shortcut icon" href="/static/favicon.ico" />
  </Head>
)
