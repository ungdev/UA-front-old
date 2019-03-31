import React from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import lazysizes from 'lazysizes' // this can appear as useless on your text editor but it's not
import 'lazysizes/plugins/attrchange/ls.attrchange'

import './gallery.css'

import ScrollToTopOnMount from '../../components/scrollToTopOnMount'
import Header from '../components/header'
import Footer from '../components/footer'
import Social from '../components/social'
import LoginModal from '../components/loginModal'
import ContactModal from '../components/contactModal'
import ForgotModal from '../components/forgotModal'
import Category from '../components/category'
import ImageView from './components/imageView'

import { fetchCanLogin } from '../../modules/canLogin'
import { autoLogin } from '../../modules/login'
import Meta from "../../components/meta";

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    let context = require.context('../../assets/gallery', false, /\.(jpe?g)$/i)
    let imagesUrl = context.keys().map(context)

    this.state = {
      loginModalOpened: false,
      forgotModalOpened: false,
      contactModalOpened: false,
      imagesYear: 2017,
      imagesUrl: imagesUrl,
      imageViewIndex: null
    }

    this.setImagesYear = this.setImagesYear.bind(this)
    this.setImageViewIndex = this.setImageViewIndex.bind(this)
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

  setImagesYear(i) {
    if(this.state.imagesYear !== i) {
      this.setState({
        imagesYear: i
      })
    }
  }

  setImageViewIndex(i) {
    this.setState({
      imageViewIndex: i
    })
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
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    
    const bottom = window.innerHeight + 125 - 12 - 50

    document.body.className =
      scrollTop >= document.body.scrollHeight - bottom ? 'a-social-fixed' : ''
  }

  render() {
    let filteredImages = []
    let filteredImagesUrl = []

    if(this.state.imagesUrl && this.state.imagesYear) {
      let i = -1

      this.state.imagesUrl.forEach(url => {
        if(url.substring(0, 19) === '/static/media/' + this.state.imagesYear + '-') {
          i++

          filteredImages.push(
            <div className="a-gallery__image__container" key={i} onClick={this.setImageViewIndex.bind(this, i)}>
              <img
                data-src={url}
                className="lazyload"
                alt=""
              />
            </div>
          )

          filteredImagesUrl.push(url)
        }
      })
    }

    return (
      <div>
        <Meta title="Galerie" description="Voici les photos des éditions de l'UTT Arena des années précédentes." />
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

        <main className="a-gallery">
          <Category>Galerie</Category>

          <div className="a-gallery__year__buttons">
            <div className={"a-gallery__year__button" + (this.state.imagesYear === 2016 ? " active" : "")} onClick={() => this.setImagesYear(2016)}>2016</div>
            <div className={"a-gallery__year__button" + (this.state.imagesYear === 2017 ? " active" : "")} onClick={() => this.setImagesYear(2017)}>2017</div>
          </div>

          <div className="a-gallery__content">
            {filteredImages}
          </div>
          
          <ImageView src={filteredImagesUrl} index={this.state.imageViewIndex} setIndex={this.setImageViewIndex} />

          <Footer openContactModal={this.openContactModal} />
        </main>

        <Social />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCanLogin: () => dispatch(fetchCanLogin()),
  autoLogin: () => dispatch(autoLogin('/gallery'))
})

export default connect(
  null,
  mapDispatchToProps
)(Gallery)
