import React from 'react'
import { connect } from 'react-redux'

import './home.css'

import logo from '../../assets/ua2018.png'

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

        <main className="a-infos">
          <div className="a-infos__content">
            <img className="a-infos__logo" src={logo} alt="UTT Arena" />

            <p>Retouvez toutes les informations de l'<span>UTT Arena</span> sur cette page : rendez-vous du 7 au 9 décembre pour 48 heures de folie et d'évasion au parc des expositions de Troyes !</p>

            <Category id="schedule">Horaires</Category>
            <div className="a-infos__center">
              <table>
                <thead>
                  <tr>
                    <th className="a-infos__table__void"></th>
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
              <strong>Inscris-toi sur le site pour accéder à la billeterie !</strong><br />
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
            <h3 className="a-info__title">En voiture</h3>
            <p>Un parking gratuit sera mis à disposition juste devant le Cube.</p>
            <p>
              Depuis Paris :
              <ul>
                <li>Autoroute : A5 (2h30, 180km)</li>
                <li>Nationale : N4 (2h50, 165km)</li>
              </ul>
            </p>
            <h3 className="a-info__title">En train</h3>
            <p>&Agrave; 1h30 de Paris (TER depuis Paris-Est, départ toutes les heures).</p>
            <h3 className="a-info__title">En bus</h3>
            <p>Ligne régulière 2, 6, 8 : arrêt Terrasses</p>

            <div className="a-infos__map">
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

            
            <Category id="program">Programme</Category>
            <small>(Programme des animations et de la scène prochainement)</small>
            <p><strong>Début des tournois :</strong> samedi 8 décembre à 10h</p>

            <Category id="services">Services</Category>
            <h3 className="a-info__title">Nourriture</h3>
            <p>On sait qu'un weekend de 48h non-stop ça creuse, nous te proposerons donc sur place : croques-monsieur, crêpes, pizzas, canettes, snack, tout pour te sustenter au mieux !</p>
            <h3 className="a-info__title">Couchage</h3>
            <p>Nous mettons à disposition des joueurs des loges communes avec un accès à l'eau (et même des douches !). Pensez à ramener vos matelas si vous souhaitez en profiter !</p>

            <Category id="players">Infos joueurs</Category>
            <h3 className="a-info__title">Cashprize et lots</h3>
            <p>La répartition entre les 3 premières places est la suivante :
              <ul>
                <li>1ère place : Cashprize</li>
                <li>2è et 3è places : Lots</li>
              </ul>
            </p>
            <p>
              Cette année l'<span>UTT Arena</span> s'est associée avec de nombreux partenaires pour vous offrir des lots de qualité !
            </p>
            <h3 className="a-info__title">Ce qu'il faut apporter</h3>
            <ul>
              <li>Ton PC avec tous ces magnifiques périphériques</li>
              <li>Une multiprise</li>
              <li>Un câble RJ45</li>
            </ul>
            <p>Si tu ne souhaites pas ramener tout ça, nous te proposons de louer un PC avec notre partenaire Scoup E-sport et nous vendons dans multiprises et des câbles RJ45.</p>
            <h3 className="a-info__title">Ce qui est fourni</h3>
            <p>Une prise électrique et un port RJ45.</p>
            <p>Et vu qu'on t'aime bien, on t'offre aussi une place sur une table avec une chaise et l'accès aux loges, mais ça c'est juste pour toi !</p>

            <Category id="faq">FAQ</Category>
            <p>Voici des questions souvent posées, en espérant que cela pourra t'aider dans ta recherche jeune padawan !</p>
            <h3 className="a-info__title">Inscription</h3>
            <p className="faq-question">Je me suis inscrit et je n'ai pas reçu mon mail de confirmation</p>
            <p className="faq-answer">Si lors de votre inscription votre adresse e-mail est rejetée, cela peut être dû à trois choses :
              <ul>
                <li>On ne peut pas avoir plus d'un compte par mail</li>
                <li>Cet e-mail a été banni. Contactez les organisateurs afin d'expliciter le problème.</li>
                <li>Vous vous êtes trompé lors de la saisie de votre adresse mail. Contactez les organisateurs grâce au formulaire de contact.</li>
              </ul>
            </p>
            <p className="faq-question">J'ai payé et je ne reçois pas mon billet</p>
            <p className="faq-answer"></p>
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
