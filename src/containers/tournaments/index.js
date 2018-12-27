import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router'

import './tournaments.css'


import Header from '../components/header'
import Footer from '../components/footer'
import Social from '../components/social'
import LoginModal from '../components/loginModal'
import ContactModal from '../components/contactModal'
import ForgotModal from '../components/forgotModal'
import HomeTournaments from './home'
import LOLTournaments from './lol'
import FortniteTournaments from './fortnite'
import CSGOTournaments from './csgo'
import HSTournaments from './hs'
import SSBUTournaments from './ssbu'
import LibreTournaments from './libre'

import { fetchCanLogin } from '../../modules/canLogin'
import { autoLogin } from '../../modules/login'

const baseUrl = process.env.REACT_APP_BASEURL

class Tournaments extends React.Component {
  constructor() {
    super()

    this.state = {
      loginModalOpened: false,
      forgotModalOpened: false,
      contactModalOpened: false
    }

    this.openLoginModal = this.openLoginModal.bind(this)
    this.openForgotModal = this.openForgotModal.bind(this)
    this.openContactModal = this.openContactModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
    this.closeContactModal = this.closeContactModal.bind(this)
    this.closeForgotModal = this.closeForgotModal.bind(this)
    this.scrollCapture = this.scrollCapture.bind(this)
  }

  componentDidMount() {
    this.props.fetchCanLogin()
    this.props.autoLogin(this.props.location)

    document.addEventListener('scroll', this.scrollCapture, { passive: true })
  }

  componentDidUnmount() {
    document.removeEventListener('scroll', this.scrollCapture)
  }

  openLoginModal() {
    this.setState({
      loginModalOpened: true
    })
  }

  closeLoginModal() {
    this.setState({
      loginModalOpened: false
    })
  }

  openContactModal() {
    this.setState({
      contactModalOpened: true
    })
  }

  closeContactModal() {
    this.setState({
      contactModalOpened: false
    })
  }

  openForgotModal() {
    this.setState({
      loginModalOpened: false,
      forgotModalOpened: true
    })
  }

  closeForgotModal() {
    this.setState({
      loginModalOpened: true,
      forgotModalOpened: false
    })
  }

  scrollCapture() {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    const bottom = window.innerHeight + 125 - 12 - 60

    document.body.className =
      scrollTop >= document.body.scrollHeight - bottom ? 'a-social-fixed' : ''
  }

  render() {
    return (
      <div>
        <Header openLoginModal={this.openLoginModal} openContactModal={this.openContactModal} />
        <LoginModal
          isOpen={this.state.loginModalOpened}
          onClose={this.closeLoginModal}
          onForgot={this.openForgotModal}
        />
        <ContactModal
          isOpen={this.state.contactModalOpened}
          onClose={this.closeContactModal}
        />
        <ForgotModal isOpen={this.state.forgotModalOpened} onClose={this.closeForgotModal} />

        <main className="a-tournaments-main">
          <Switch>
            <Route
                path={baseUrl + 'tournaments'}
                exact
                component={HomeTournaments}
              />
            <Route
              path={baseUrl + 'tournaments/lol'}
              exact
              component={LOLTournaments}
            />
            <Route
              path={baseUrl + 'tournaments/fortnite'}
              exact
              component={FortniteTournaments}
            />
            <Route
              path={baseUrl + 'tournaments/csgo'}
              exact
              component={CSGOTournaments}
            />
            <Route
              path={baseUrl + 'tournaments/hs'}
              exact
              component={HSTournaments}
            />
            <Route
              path={baseUrl + 'tournaments/ssbu'}
              exact
              component={SSBUTournaments}
            />
            <Route
              path={baseUrl + 'tournaments/libre'}
              exact
              component={LibreTournaments}
            />
            <Redirect from="*" to="/tournaments" />
          </Switch>
          <Footer openContactModal={this.openContactModal} />
        </main>

        <Social />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  location: state.routing.location.pathname
})
const mapDispatchToProps = dispatch => ({
  fetchCanLogin: () => dispatch(fetchCanLogin()),
  autoLogin: (location) => dispatch(autoLogin(location))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tournaments)
