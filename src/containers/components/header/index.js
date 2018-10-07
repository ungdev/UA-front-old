import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import SmoothScroll from 'smooth-scroll'

import logo from '../../../assets/ua2018.small.png'
import Button from '../../../components/button'

import './header.css'

class Header extends React.Component {
  constructor() {
    super()

    this.scroll = new SmoothScroll()

    this.scrollToInformations = this.scrollToInformations.bind(this)
    this.scrollToSpotlights = this.scrollToSpotlights.bind(this)
    this.mainButton = this.mainButton.bind(this)
  }

  scrollToInformations() {
    this.scroll.animateScroll(document.querySelector('#informations'))
  }

  scrollToSpotlights() {
    this.scroll.animateScroll(document.querySelector('#spotlights'))
  }

  mainButton() {
    if (this.props.isLoggedIn) {
      this.props.gotoDashboard()
    } else {
      this.props.openLoginModal()
    }
  }

  render() {
    let loginText = this.props.isLoggedIn ? 'Dashboard' : 'Connexion'

    return (
      <header className="a-intro-header">
        <nav className="a-intro-header__nav">
          <div>
            <Button onClick={this.gotoHome}><img src={logo} height="50" /> Accueil</Button>
          </div>
          <div>
            <Button onClick={this.gotoInformations}>Informations</Button>
          </div>
          <div>
            <Button onClick={this.gotoTournaments}>Tournois</Button>
          </div>
          <div>
            <Button onClick={this.gotoPartners}>Partenaires</Button>
          </div>
          <div>
            <Button onClick={this.openContactModal}>Contact</Button>
          </div>

          <div>
            <Button onClick={this.mainButton}>{loginText}</Button>
          </div>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.token && state.login.token.length > 0
})

const mapDispatchToProps = dispatch => ({
  gotoDashboard: () => dispatch(push('/dashboard'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
