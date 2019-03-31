import React from 'react'
import { connect } from 'react-redux'

import './partners.css'


import ScrollToTopOnMount from '../../components/scrollToTopOnMount'
import Header from '../components/header'
import Footer from '../components/footer'
import Social from '../components/social'
import LoginModal from '../components/loginModal'
import ContactModal from '../components/contactModal'
import ForgotModal from '../components/forgotModal'
import Category from '../components/category'

import { fetchCanLogin } from '../../modules/canLogin'
import { autoLogin } from '../../modules/login'
import Meta from "../../components/meta";

class Partners extends React.Component {
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

    const bottom = window.innerHeight + 125 - 12 - 40

    document.body.className =
      scrollTop >= document.body.scrollHeight - bottom ? 'a-social-fixed' : ''
  }

  render() {
    let id = 0
    const partners = process.env.REACT_APP_PARTNERS.split(',').map(partner => ({
      key: id++,
      name: partner,
      image: `${process.env.PUBLIC_URL}/${partner}.png`,
      url: process.env[`REACT_APP_PARTNER_${partner.toUpperCase()}_LINK`],
      description: process.env[`REACT_APP_PARTNER_${partner.toUpperCase()}_DESCRIPTION`].split('<br/>')
    }))
    return (
      <div>
        <Meta title="Nos partenaires" description="Voici la présentation de nos partenaires qui nous soutiennent pour cette édition de l'UTT Arena"/>
        <ScrollToTopOnMount />
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

        <main className="a-partners-main">
          <Category>Nos partenaires</Category>
          <div className="a-partners-list">
            {partners.map((partner, i) =>
              <a
                key={i}
                className="a-partners-item"
                href={partner.url}
              >
                <div className="a-partners-image"><img src={partner.image} key={i} alt={partner.name} /></div>
                <div className="a-partners-text">{partner.description.map(desc => <p key={id++}>{desc}</p>)}</div>
              </a>
            )}
          </div>
          <Footer openContactModal={this.openContactModal} />
        </main>

        <Social />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCanLogin: () => dispatch(fetchCanLogin()),
  autoLogin: () => dispatch(autoLogin('/partners'))
})

export default connect(
  null,
  mapDispatchToProps
)(Partners)
