import React from 'react'

import './home.css'

import Header from './components/header'
import Intro from './components/intro'
import Informations from './components/informations'
import Category from './components/category'
import Social from './components/social'
import Spotlights from './components/spotlights'
import Partners from './components/partners'
import Button from '../../components/button'

import { increment, incrementAsync, decrement, decrementAsync } from '../../modules/counter'

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
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    const bottom = window.innerHeight + 90 - 12

    document.body.className =
      scrollTop >= document.body.scrollHeight - bottom ? 'a-social-fixed' : ''
  }

  render() {
    return (
      <div>
        <Header />
        <Intro />

        <main className="a-home">
          <div className="a-home__content">
            <Category id="informations">Informations</Category>
            <Informations />
            <Button raised={true}>C'est parti !</Button>
            <Category id="spotlights">Tournois</Category>
            <Spotlights />
          </div>
          <Partners />
          <div className="a-home__content a-home__footer">
            <div>
              © UTT Net Group
              <a href="/mentions">Mentions légales</a>
            </div>
            <div>
              <a href={`mailto:${process.env.REACT_APP_CONTACT_MAIL}`}>
                {process.env.REACT_APP_CONTACT_MAIL}
              </a>
            </div>
            <div>
              <a href={`tel:${process.env.REACT_APP_CONTACT_PHONE}`}>
                {process.env.REACT_APP_CONTACT_PHONE}
              </a>
            </div>
          </div>
        </main>

        <Social />
      </div>
    )
  }
}

export default Home
