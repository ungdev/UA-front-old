import React from 'react'
import { connect } from 'react-redux'

import './home.css'

import ScrollToTopOnMount from '../../components/scrollToTopOnMount'
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
        <ScrollToTopOnMount />
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
            <p>Retouvez toutes les informations de l'<span>UTT Arena</span> sur cette page : rendez-vous du 7 au 9 décembre pour 48 heures de folie et d'évasion au parc des expositions de Troyes !</p>

            <Category id="schedule">Horaires</Category>
            <div>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Vendredi 7</th>
                    <th>Samedi 8</th>
                    <th>Dimanche 9</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>UTT Arena</td>
                    <td>17h - 23h59</td>
                    <td>00h - 23h59</td>
                    <td>00h - 18h</td>
                  </tr>
                  <tr>
                    <td>Festival des Jeux</td>
                    <td>17h - 21h</td>
                    <td>11h - 22h</td>
                    <td>11h - 18h</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Category id="tickets">Billetterie</Category>
            <p>Astuce : en achetant vos billets en prévente :
              <ul>
                <li>Bénéficiez de tarifs réduits</li>
                <li>Assurez une place pour votre équipe</li>
              </ul>
            </p>
            <br />
            <p>
              Inscris-toi sur le site pour accéder à la billeterie !<br />
              <ul>
                <li>Joueur : 15€</li>
                <li>&Eacute;tudiants du réseau UT : 10€</li>
                <li>Visiteurs : 10€ (limité à 40 places)</li>
              </ul>
            </p>

            <Category id="access">Accès</Category>
            <p>
              Adresse de l'événement : 20 rue des Gayettes, 10000 Troyes
            </p>
            <h3>En voiture</h3>
            <p>Un parking gratuit sera mis à disposition juste devant le Cube.</p>
            <p>
              Depuis Paris :
              <ul>
                <li>Autoroute : A5 (2h30, 180km)</li>
                <li>Nationale : N4 (2h50, 165km)</li>
              </ul>
            </p>
            <h3>En train</h3>
            <p>&Agrave; 1h30 de Paris (TER depuis Paris-Est, départ toutes les heures).</p>
            <h3>En bus</h3>
            <p>Ligne régulière 2, 6, 8 : arrêt Terrasses</p>

            
            <Category id="program">Programme</Category>
            <small>(Programme des animations et de la scène prochainement)</small>
            <p><strong>Début des tournois :</strong> samedi 8 décembre à 10h</p>

            <Category id="services">Services</Category>
            <h3>Nourriture</h3>
            <p>On sait qu'un weekend de 48h non-stop ça creuse, nous te proposerons donc sur place : croques-monsieur, crêpes, pizzas, canettes, snack, tout pour te sustenter au mieux !</p>
            <h3>Couchage</h3>
            <p>Nous mettons à disposition des joueurs des loges communes avec un accès à l'eau (et même aux douches :D). Pensez à ramener vos matelas si vous souhaitez en profiter !</p>

            <Category id="players">Infos joueurs</Category>


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
