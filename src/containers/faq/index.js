import React from 'react'
import { connect } from 'react-redux'

import './faq.css'


import ScrollToTopOnMount from '../../components/scrollToTopOnMount'
import Header from '../components/header'
import Footer from '../components/footer'
import Social from '../components/social'
import LoginModal from '../components/loginModal'
import ContactModal from '../components/contactModal'
import ForgotModal from '../components/forgotModal'

import { fetchCanLogin } from '../../modules/canLogin'
import { autoLogin } from '../../modules/login'

class FAQ extends React.Component {
  constructor() {
    super()

    this.state = {
      loginModalOpened: false,
      forgotModalOpened: false,
      contactModalOpened: false,
      faqEntriesOpened: []
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

    const bottom = window.innerHeight + 125 - 12 - 50

    document.body.className =
      scrollTop >= document.body.scrollHeight - bottom ? 'a-social-fixed' : ''
  }

  toggleFaqEntry(i) {
    let entries = this.state.faqEntriesOpened.slice()
    entries[i] = !entries[i]

    this.setState({
      faqEntriesOpened: entries
    })
  }

  render() {
    return (
      <div>
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

        <main className="a-infos">
          <div className="a-infos__content">
            <div>
              <h2>Voici des questions souvent posées, en espérant que cela pourra t'aider dans ta recherche jeune padawan !</h2>

              <h3 className="a-infos__title">Inscription</h3>

              <div className={"faq-container" + (this.state.faqEntriesOpened[0] ? " active" : "")} key={0}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 0)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Combien coûte la LAN pour les joueurs et les accompagnateurs ?
                </span>
                <span className="faq-answer">
                  La LAN coûte 15€ pour tous les joueurs, avec une réduction de 5€ pour les écoles partenaires. La place accompagnateur/visiteur est à 6€.
                </span>
              </div>

              <div className={"faq-container" + (this.state.faqEntriesOpened[1] ? " active" : "")} key={1}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 1)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Je me suis inscrit et je n'ai pas reçu mon mail de confirmation
                </span>
                <span className="faq-answer">
                  Si lors de votre inscription votre adresse e-mail est rejetée, cela peut être dû à trois choses :
                  <ul>
                    <li>On ne peut pas avoir plus d'un compte par mail</li>
                    <li>Cet e-mail a été banni. Contactez les organisateurs afin d'en savoir plus.</li>
                    <li>Vous vous êtes trompé lors de la saisie de votre adresse mail. Contactez les organisateurs grâce au formulaire de contact.</li>
                  </ul>
                </span>
              </div>

              <div className={"faq-container" + (this.state.faqEntriesOpened[2] ? " active" : "")} key={2}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 2)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Quel est l'âge minimum pour la LAN ?
                </span>
                <span className="faq-answer">
                  15 ans. Pour les mineurs, une autorisation parentale sera demandée le jour de la LAN.
                </span>
              </div>

              <div className={"faq-container" + (this.state.faqEntriesOpened[3] ? " active" : "")} key={3}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 3)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Quand commencent les tournois ?
                </span>
                <span className="faq-answer">
                  Tous les tournois commencent le samedi à 10h.
                </span>
              </div>

              <div className={"faq-container" + (this.state.faqEntriesOpened[4] ? " active" : "")} key={4}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 4)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Est ce que je peux jouer à la manette ?
                </span>
                <span className="faq-answer">
                  Oui.
                </span>
              </div>

              <div className={"faq-container" + (this.state.faqEntriesOpened[5] ? " active" : "")} key={5}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 5)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Est ce que je peux streamer pendant la LAN ?
                </span>
                <span className="faq-answer">
                  Peut être. Il faudra dans un premier temps se déclarer auprès des organisateurs, et ensuite en fonction de l'état du réseau tu pourras streamer ou non.
                </span>
              </div>

              <h3 className="a-infos__title">Paiement</h3>
              
              <div className={"faq-container" + (this.state.faqEntriesOpened[10] ? " active" : "")} key={10}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 10)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Puis-je payer en espèces ?
                </span>
                <span className="faq-answer">
                  Il sera possible de payer en espèce uniquement sur place, mais à tes risques et périls, car il y a de fortes chances que les places soient déjà toutes parties.
                </span>
              </div>

              <div className={"faq-container" + (this.state.faqEntriesOpened[11] ? " active" : "")} key={11}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 11)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Est ce que je peux payer par paypal ?
                </span>
                <span className="faq-answer">
                  Non, sur le site, seul le paiement par carte bancaire est disponible.
                </span>
              </div>

              <div className={"faq-container" + (this.state.faqEntriesOpened[12] ? " active" : "")} key={12}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 12)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Est ce que je peux payer pour toute mon équipe ?
                </span>
                <span className="faq-answer">
                  Non, chacun doit payer sa place.
                </span>
              </div>
              <h3 className="a-infos__title">Déroulement des tournois</h3>

              <div className={"faq-container" + (this.state.faqEntriesOpened[13] ? " active" : "")} key={13}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 13)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Est-ce que je peux jouer sur PS4 à Fortnite
                </span>
                <span className="faq-answer">
                  Non, seuls les PCs sont autorisés.
                </span>
              </div>
              <h3 className="a-infos__title">Tournoi Super Smash Bros Ultimate</h3>
              <div className={"faq-container" + (this.state.faqEntriesOpened[14] ? " active" : "")} key={14}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 14)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Est-ce que je dois ramener ma console pour le tournoi à Smash Bros ?
                </span>
                <span className="faq-answer">
                  Non, nous fournissons tout le matériel
                </span>
              </div>
              <div className={"faq-container" + (this.state.faqEntriesOpened[15] ? " active" : "")} key={15}>
                <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, 15)}>
                  <span className="arrow-segment"></span>
                  <span className="arrow-segment"></span>
                  Est-ce que je peux ramener mon PC ?
                </span>
                <span className="faq-answer">
                  Non, vous n'aurez pas de place attribuée
                </span>
              </div>


            </div>
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
  autoLogin: () => dispatch(autoLogin('/faq'))
})

export default connect(
  null,
  mapDispatchToProps
)(FAQ)
