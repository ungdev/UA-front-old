import Header from '../../components/homeHeader'
import React from 'react'
import { fetchCanLogin } from '../../modules/canLogin'
import { autoLogin } from '../../modules/login'
import { connect } from 'react-redux'
import Meta from '../../components/meta'
import LoginModal from '../../components/loginModal'
import ContactModal from '../../components/contactModal'
import ForgotModal from '../../components/forgotModal'
import Footer from '../../components/footer'
import Social from '../../components/social'

import './home.css'

import ScrollToTopOnMount from '../../components/scrollToTopOnMount'
import Header from '../components/header'
import Intro from '../components/intro'
//import Countdown from '../components/countdown'
import Informations from '../components/informations'
import Category from '../components/category'
import Footer from '../components/footer'
import Social from '../components/social'
import Spotlights from '../components/spotlights'
import Partners from '../components/partners'
import LoginModal from '../components/loginModal'
import ContactModal from '../components/contactModal'
import ForgotModal from '../components/forgotModal'

import './homeLayout.css'

class HomeLayout extends React.Component {
  constructor(props) {
    super(props)

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

    const bottom = window.innerHeight + 125 - 12 - 50

    document.body.className =
      scrollTop >= document.body.scrollHeight - bottom ? 'a-social-fixed' : ''
  }

  render() {
    return (
      <div>
        <Meta title={this.props.title} url={this.props.url} description={this.props.description} />
        <Header openLoginModal={this.openLoginModal} openContactModal={this.openContactModal} />
        <LoginModal
          isOpen={this.state.loginModalOpened}
          onClose={this.closeLoginModal}
          onForgot={this.openForgotModal}
        />
        <ContactModal isOpen={this.state.contactModalOpened} onClose={this.closeContactModal} />
        <ForgotModal isOpen={this.state.forgotModalOpened} onClose={this.closeForgotModal} />

        <main className="a-home">
          
            <Informations />
            
         
          <Partners />
          <Footer openContactModal={this.openContactModal} />
        </main>

        <Social />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCanLogin: () => dispatch(fetchCanLogin()),
  autoLogin: () => dispatch(autoLogin(Router.asPath))
})

export default connect(
  null,
  mapDispatchToProps
)(HomeLayout)
