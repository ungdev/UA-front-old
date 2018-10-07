import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import SmoothScroll from 'smooth-scroll'

import Button from '../../../../components/button'

import './header.css'

class Header extends React.Component {
  constructor() {
    super()

    this.scroll = new SmoothScroll()

    this.scrollToAccess = this.scrollToAccess.bind(this)
    this.homeButton = this.homeButton.bind(this)
    this.mainButton = this.mainButton.bind(this)
  }

  scrollToAccess() {
    this.scroll.animateScroll(document.querySelector('#access'))
  }

  homeButton() {
    this.props.gotoHome()
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
            <Button onClick={this.homeButton}>Accueil</Button>
          </div>
          <div>
            <Button onClick={this.mainButton} raised={true}>
              {loginText}
            </Button>
          </div>
          <div>
            <Button onClick={this.scrollToAccess}>Accès</Button>
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
  gotoDashboard: () => dispatch(push('/dashboard')),
  gotoHome: () => dispatch(push('/'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
