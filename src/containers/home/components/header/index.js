import React from 'react'
import SmoothScroll from 'smooth-scroll'

import Button from '../../../../components/button'

import './header.css'

class Header extends React.Component {
  constructor() {
    super()

    this.scroll = new SmoothScroll()

    this.scrollToInformations = this.scrollToInformations.bind(this)
    this.scrollToSpotlights = this.scrollToSpotlights.bind(this)
  }

  scrollToInformations() {
    this.scroll.animateScroll(document.querySelector('#informations'))
  }

  scrollToSpotlights() {
    this.scroll.animateScroll(document.querySelector('#spotlights'))
  }

  render () {
    let loginText = (this.props.hasUser) ? 'Dashboard' : 'Connexion'

    return (
      <header className="a-intro-header">
        <nav className="a-intro-header__nav">
          <div>
            <Button onClick={this.scrollToInformations}>Informations</Button>
          </div>
          <div>
            <Button raised={true}>{loginText}</Button>
          </div>
          <div>
            <Button onClick={this.scrollToSpotlights}>Tournois</Button>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
