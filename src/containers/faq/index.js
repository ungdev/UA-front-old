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
    let faqData = [
      {
        title: "Général",
        entries: [
          {
            question: "Quand commencent les tournois ?",
            answer: "Tous les tournois commencent le samedi à 10h."
          },
          {
            question: "Puis-je jouer à la manette ?",
            answer: "Oui."
          },
          {
            question: "Puis-je streamer pendant la LAN ?",
            answer: "Peut-être. Il faudra dans un premier temps se déclarer auprès des organisateurs. Ensuite, en fonction de l'état du réseau, tu pourras peut-être streamer."
          },
          {
            question: "Où puis-je trouver des joueurs pour mon équipe ?",
            answer: "Sur le discord de l'UTT Arena tu trouveras sûrement d'autres joueurs qui cherchent une équipe. Tu peux trouver le lien du discord en bas du site."
          }
        ]
      },
      {
        title: "Inscription",
        entries: [
          {
            question: "Quelle place doivent acheter les coachs/managers de mon équipe ?",
            answer: "Les coachs et managers d'équipes doivent acheter une place visiteur."
          },
          {
            question: "Combien coûte la LAN pour les joueurs et les accompagnateurs ?",
            answer: "La LAN coûte 15€ pour tous les joueurs, avec une réduction de 5€ pour les écoles partenaires. La place accompagnateur/visiteur est à 6€."
          },
          {
            question: "Je me suis inscrit et je n'ai pas reçu mon mail de confirmation",
            answer:
              <span>
                Si lors de votre inscription votre adresse e-mail est rejetée, cela peut être dû à trois choses :
                    <ul>
                      <li>On ne peut pas avoir plus d'un compte par mail</li>
                      <li>Cet e-mail a été banni. Contactez les organisateurs afin d'en savoir plus.</li>
                      <li>Vous vous êtes trompé lors de la saisie de votre adresse mail. Contactez les organisateurs grâce au formulaire de contact.</li>
                    </ul>
              </span>
          },
          {
            question: "Quel est l'âge minimum pour la LAN ?",
            answer: "15 ans. Pour les mineurs, une autorisation parentale ou du responsable légal sera demandée le jour de la LAN."
          }
        ]
      },
      {
        title: "Paiement",
        entries: [
          {
            question: "Puis-je payer en espèces ?",
            answer: "Il sera possible de payer en espèces sur place, mais à tes risques et périls, car il y a de fortes chances que toutes les places soient déjà parties."
          },
          {
            question: "Puis-je payer par PayPal ?",
            answer: "Non, sur le site, seul le paiement par carte bancaire est disponible."
          },
          {
            question: "Est ce que je peux payer pour toute mon équipe ?",
            answer: "Non, chacun doit payer sa place."
          }
        ]
      },
      {
        title: "Déroulement des tournois",
        entries: [
          {
            question: "Puis-je jouer à Fortnite sur PS4 ?",
            answer: "Non, seuls les PCs sont autorisés."
          }
        ]
      },
      {
        title: "Tournoi Super Smash Bros Ultimate",
        entries: [
          {
            question: "Dois-je ramener ma console ?",
            answer: "Non, nous fournissons tout le matériel."
          },
          {
            question: "Puis-je ramener mon PC ?",
            answer: "Non, vous n'aurez pas de place attribuée."
          }
        ]
      }
    ]

    let id = 0
    let faqContent = []

    faqData.forEach(data => {
      faqContent.push(
        <h3 className="a-faq__title">{data.title}</h3>
      )

      data.entries.forEach(entry => {
        faqContent.push(
          <div className={"faq-container" + (this.state.faqEntriesOpened[id] ? " active" : "")} key={id}>
            <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, id)}>
              <span className="faq-arrow"></span>
              {entry.question}
            </span>
            <span className="faq-answer">
              {entry.answer}
            </span>
          </div>
        )

        id++
      })
    })

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

        <main className="a-faq">
          <div className="a-faq__content">
            <div>
              <h2 style={{ fontWeight: 'normal' }}>Voici des questions souvent posées, en espérant que cela pourra t'aider dans ta recherche jeune padawan !</h2>

              {faqContent}
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
