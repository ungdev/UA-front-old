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

  render() {
    let mainButtonText = this.props.isLoggedIn ? 'Dashboard' : 'Connexion'

    return (
      <header className="a-intro-header">
        <nav className="a-intro-header__nav__desktop">
          <div>
            <Button onClick={this.props.gotoHome}><img className="a-intro-header__logo" src={logo} height="45" /></Button>
          </div>
          <div>
            <Button onClick={this.props.gotoHome}>Accueil</Button>
          </div>
          <div>
            <Button onClick={this.props.gotoInformations}>Informations</Button>
          </div>
          <div>
            <Button onClick={this.props.gotoTournaments}>Tournois</Button>
          </div>
          <div>
            <Button onClick={this.props.gotoPartners}>Partenaires</Button>
          </div>
          <div>
            <Button onClick={this.props.openContactModal}>Contact</Button>
          </div>
          <div className="a-intro-header__mainButton">
            <Button onClick={this.mainButton} raised>{mainButtonText}</Button>
          </div>
        </nav>
        
        <nav className="a-intro-header__nav__mobile">
          <div className="a-intro-header__nav__mobile__topbar">
            <div>
              <Button onClick={this.toggleMobileMenu}><img className="a-intro-header__logo" src={logo} height="45" /></Button>
            </div>
            <div className="a-intro-header__mainButton">
              <Button onClick={this.mainButton} raised>{mainButtonText}</Button>
            </div>
            <div></div>
          </div>

          <div className={"a-intro-header__nav__mobile__content" + (this.state.mobileMenu ? " active" : "")}>
            <div>
              <Button onClick={this.props.gotoHome}>Accueil</Button>
            </div>
            <div>
              <Button onClick={this.props.gotoInformations}>Informations</Button>
            </div>
            <div>
              <Button onClick={this.props.gotoTournaments}>Tournois</Button>
            </div>
            <div>
              <Button onClick={this.props.gotoPartners}>Partenaires</Button>
            </div>
            <div>
              <Button onClick={this.props.openContactModal}>Contact</Button>
            </div>
          </div>

          <div onClick={this.closeMobileMenu} className={"a-intro-header__nav__mobile__overlay" + (this.state.mobileMenu ? " active" : "")}></div>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.token && state.login.token.length > 0
})

const mapDispatchToProps = dispatch => ({
  gotoHome: () => dispatch(push('/')),
  gotoInformations: () => dispatch(push('/informations')),
  gotoTournaments: () => dispatch(push('/tournaments')),
  gotoPartners: () => dispatch(push('/partners')),
  gotoDashboard: () => dispatch(push('/dashboard'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
