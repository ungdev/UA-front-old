import React from 'react'

import './home.css'

import Header from './components/header'
import Intro from './components/intro'
import Informations from './components/informations'
import Category from './components/category'
import Social from './components/social'
import Spotlights from './components/spotlights'
import Partners from './components/partners'

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

class Home extends React.Component {
  constructor() {
    super()

    this.scrollCapture = this.scrollCapture.bind(this)
  }

  componentWillMount() {
    document.addEventListener('scroll', this.scrollCapture, { passive: true })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollCapture)
  }

  scrollCapture() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const bottom = window.innerHeight + 50 - 12

    document.body.className = (scrollTop >= document.body.scrollHeight - bottom)
      ? 'a-social-fixed'
      : ''
  }

  render() {
    return (
      <div>
        <Header />
        <Intro />

        <main className="a-home">
          <div className="a-home__content">
            <Category>Informations</Category>
            <Informations />
            <Category>Tournois</Category>
            <Spotlights />
          </div>
          <Partners />
          <div className="a-home__content a-home__footer">
            © UTT Net Group
            <a href="/mentions">Mentions légales</a>
          </div>
        </main>

        <Social />
      </div>
    )
  }
}

export default Home
