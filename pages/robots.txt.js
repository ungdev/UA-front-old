import React from 'react'

export default class Robots extends React.Component {
  static getInitialProps({ res }) {
    res.setHeader('Content-Type', 'text/plain')
    res.send('User-agent: *\nDisallow: /dashboard')
    res.end()
  }
}
