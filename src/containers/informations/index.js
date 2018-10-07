import React from 'react'
import { connect } from 'react-redux'

import './home.css'

import Header from './components/header'
import Category from '../components/category'
import Footer from '../components/footer'
import Social from '../components/social'
import Partners from '../components/partners'
import LoginModal from '../components/loginModal'
import ContactModal from '../components/contactModal'
import ForgotModal from '../components/forgotModal'

import { fetchCanLogin } from '../../modules/canLogin'
import { autoLogin } from '../../modules/login'

class Informations extends React.Component {
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

  componentWillMount() {
    this.props.fetchCanLogin()
    this.props.autoLogin()

    document.addEventListener('scroll', this.scrollCapture, { passive: true })
  }

  componentWillUnmount() {
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

    const bottom = window.innerHeight + 125 - 12

    document.body.className =
      scrollTop >= document.body.scrollHeight - bottom ? 'a-social-fixed' : ''
  }

  render() {
    return (
      <div>
        <Header openLoginModal={this.openLoginModal} />
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

        <main className="a-home">
          <div className="a-home__content">
            <Category id="informations">Informations</Category>
            <p>Retouvez toutes les informations de l'<span>UTT Arena</span> sur cette page : rendez-vous du 7 au 9 décembre pour 48 heures de folie et d'évasion au parc des expositions de Troyes !</p>

            <h1></h1>

            <div className="a-home__map">
              <iframe
                height="320"
                title="Google Maps"
                src="https://maps.google.com/maps?q=UTT Arena&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </div>
          <Partners />
          <Footer />
        </main>

        <Social />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCanLogin: () => dispatch(fetchCanLogin()),
  autoLogin: () => dispatch(autoLogin('/informations'))
})

export default connect(
  null,
  mapDispatchToProps
)(Informations)
