import React from 'react'
import { connect } from 'react-redux'

import Button from '../button'
import { push } from '../../modules/router'

import './homeHeader.css'
import Link from 'next/link'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileMenu: false
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.closeMobileMenu = this.closeMobileMenu.bind(this)
    this.mainButton = this.mainButton.bind(this)
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenu: !this.state.mobileMenu
    })
  }

  closeMobileMenu() {
    this.setState({
      mobileMenu: false
    })
  }

  mainButton() {
    if (this.props.isLoggedIn) {
      this.props.gotoDashboard()
    } else {
      this.props.openLoginModal()
    }
  }

  drawMenuItems() {
    // noinspection HtmlUnknownTarget
    return (
      <React.Fragment>
        <Link prefetch href="/">
          <a>Accueil</a>
        </Link>
        <Link prefetch href="/informations">
          <a>Informations</a>
        </Link>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        <Link href="/tournaments">
          <a>Tournois</a>
        </Link>
        <Link href="/partners">
          <a>Partenaires</a>
        </Link>
        <Link href="/gallery">
          <a>Galerie</a>
        </Link>
      </React.Fragment>
    )
  }

  render() {
    let mainButtonText = this.props.isLoggedIn ? 'Dashboard' : 'Connexion'

    return (
      <header className="a-intro-header">
        <nav className="a-intro-header__nav__desktop">
          {this.drawMenuItems()}
          <div className="a-intro-header__mainButton">
            <Button onClick={this.mainButton} raised>
              {mainButtonText}
            </Button>
          </div>
        </nav>

        <nav className="a-intro-header__nav__mobile">
          <div className="a-intro-header__nav__mobile__topbar">
            <div style={{ paddingBottom: '3px' }}>
              <Button onClick={this.toggleMobileMenu}>
                <div
                  className={'a-intro-header__hamburger' + (this.state.mobileMenu ? ' active' : '')}
                >
                  <div className="a-intro-header__hamburger__segment" />
                  <div className="a-intro-header__hamburger__segment" />
                  <div className="a-intro-header__hamburger__segment" />
                </div>
              </Button>
            </div>

            <div className="a-intro-header__mainButton" style={{ paddingBottom: '3px' }}>
              <Button onClick={this.mainButton} raised>
                {mainButtonText}
              </Button>
            </div>
          </div>

          <div
            className={
              'a-intro-header__nav__mobile__content' + (this.state.mobileMenu ? ' active' : '')
            }
          >
            {this.drawMenuItems()}
          </div>

          <div
            onClick={this.closeMobileMenu}
            className={
              'a-intro-header__nav__mobile__overlay' + (this.state.mobileMenu ? ' active' : '')
            }
          />
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
