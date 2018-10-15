import React from 'react'
import { connect } from 'react-redux'

import './home.css'

import logo from '../../assets/ua2018.png'

import ScrollToTopOnMount from '../../components/scrollToTopOnMount'
import Header from '../components/header'
import Category from '../components/category'
import Footer from '../components/footer'
import Social from '../components/social'
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
      question:
        <span>Je me suis inscrit et je n'ai pas reçu mon mail de confirmation</span>,
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
      question:
        <span>Puis-je payer en espèces ?</span>,
      answer:
        <span>Il est impossible de payer en espèces pendant les préventes. Ce sera possible une fois sur place, à tes risques et périls, car il y a de fortes chances que les places soient déjà toutes parties.</span>
    },
    {
      question:
        <span>Combien coûte la LAN pour les joueurs et les accompagnateurs ?</span>,
      answer:
        <span>La LAN coûte 15€ pour tous les joueurs, avec une réduction de 5€ pour les écoles partenaires. La place accompagnateur/visiteur est à 6€.</span>
    },
    {
      question:
        <span>Quel est l'âge minimum pour la LAN ?</span>,
      answer:
        <span>15 ans. Pour les mineurs, une autorisation parentale sera demandée le jour de la LAN.</span>
    },
    {
      question:
        <span>Quand commencent les tournois ?</span>,
      answer:
        <span>Tous les tournois commencent le samedi à 10h.</span>
    },
    {
      question:
        <span>Est ce que je peux jouer à la manette ?</span>,
      answer:
        <span>Oui.</span>
    }
  ]

    let faqEntries = []

    for(let i = 0; i < faqData.length; i++) {
      faqEntries.push(
        <div className={"faq-container" + (this.state.faqEntriesOpened[i] ? " active" : "")} key={i}>
          <span className="faq-question" onClick={this.toggleFaqEntry.bind(this, i)}>
            <span className="arrow-segment"></span>
            <span className="arrow-segment"></span>
            {faqData[i].question}
          </span>
          <span className="faq-answer">
            {faqData[i].answer}
          </span>
        </div>
      )
    }

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
            <img className="a-infos__logo" src={logo} alt="UTT Arena" />

            <p style={{ textAlign: 'justify'}}>Retrouvez toutes les informations de l'<span>UTT Arena</span> sur cette page : rendez-vous du 7 au 9 décembre pour 48 heures de folie et d'évasion au parc des expositions de Troyes !</p>

            <Category id="presentation">Présentation</Category>
            <div>
              <p style={{ textAlign: 'justify'}}>
                L’<span className="a-infos__important">UTT Arena</span> c’est le plus gros événement de l’association <span className="a-infos__important">UTT Net Group</span> en matière d’e-sport. L’association a été créée en 1998 et avait pour vocation de réunir les passionnés d’informatique et des nouvelles technologies de l’Université de Technologie de Troyes (UTT).<br />
                L’UA réalise sa <span className="a-infos__important">16<sup>ème</sup> édition</span> cette année ! Au commencement, lors de la première édition, nous étions dans une salle d’examen de l’UTT avec une centaine de joueurs.<br />
                Puis l'événement a grandi, l’organisation a augmenté à 200 joueurs avec une scène dans la halle sportive de l’UTT.<br />
                2015 arriva, une opportunité unique nous a été offerte par la ville avec la création du Festival des Jeux. Nous avons donc déménagé au Cube et nous sommes depuis dans le format que vous connaissez !<br />
                &Agrave; présent l’UTT Arena c’est <span className="a-infos__important">460 joueurs</span>, <span className="a-infos__important">5 tournois spotlights</span>, une scène de 70 m² et une centaine de bénévoles.<br />
              </p>
              <p style={{ textAlign: 'justify'}}>Et tout cela, c’est grâce à vous, les joueurs, qui nous font confiance chaque année pour vous organiser un événement de folie, et à nos partenaires qui nous soutiennent chaque année dans l'organisation de la LAN !</p>
            </div>

            <Category id="schedule">Horaires</Category>
            <div className="a-infos__table__container">
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
            <div>
              <p>Astuce : en achetant vos billets en prévente :</p>
              <ul>
                <li>Bénéficiez de tarifs réduits</li>
                <li>Assurez une place pour votre équipe</li>
              </ul>
              <br />
              <p>
                <strong>Inscris-toi sur le site pour accéder à la billeterie !</strong>
              </p><br />
              <ul>
                <li>Joueur : 15€ (10€ pour les écoles partenaires)</li>
                <li>Accompagnateur : 6€ (limité à 40 places)</li>
              </ul>
            </div>

            <Category id="access">Accès</Category>
            <div>
              <p>
                Adresse de l'événement : 20 rue des Gayettes, 10000 Troyes
              </p>
              <h3 className="a-info__title">En voiture</h3>
              <p style={{ textAlign: 'justify'}}>Un parking gratuit sera mis à disposition juste devant le Cube. Attention, utilisez le parking en face du Cube de 
              l'autre côté de la route, celui proche de l'entrée est réservé aux visiteurs du festival</p>
              <p>
                Depuis Paris :
              </p>
              <ul>
                <li>Autoroute : A5 (2h30, 180km)</li>
                <li>Nationale : N4 (2h50, 165km)</li>
              </ul>
              <p>
                Depuis Reims :
              </p>
              <ul>
                <li>Autoroute : A26 (1h25, 127km)</li>
                <li>Départementale : D877 (1h55, 128km)</li>
              </ul>
              <p>
                Depuis Lyon :
              </p>
              <ul>
                <li>Autoroute : A6, A3 et A5 (3h30, 375km)</li>
                <li>Nationale : N6, D906 (5h27, 354km)</li>
              </ul>
              <p>
                Depuis Strasbourg :
              </p>
              <ul>
                <li>Autoroute : A31 (4h10, 384km)</li>
                <li>Nationale : N4 (4h15, 338km)</li>
              </ul>
              <h3 className="a-info__title">En train</h3>
              <p>&Agrave; 1h30 de Paris (TER depuis Paris-Est, départ toutes les heures). Le Cube est à 10 minutes à pied de la gare.</p>
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
            </div>

            <Category id="program">Programme</Category>
            <div>
              <p>(Programme des animations et de la scène prochainement)</p>
              <p><strong>Accueil des équipes :</strong> vendredi 7 décembre à partir de 17h</p>
              <p><strong>Début des tournois :</strong> samedi 8 décembre à 10h</p>
            </div>

            <Category id="services">Services</Category>
            <div>
              <h3 className="a-info__title">Nourriture</h3>
              <p style={{ textAlign: 'justify'}}>On sait qu'un weekend de 48h non-stop ça creuse, nous te proposerons donc sur place : croques-monsieur, crêpes, pizzas, canettes, snack, tout
               pour te sustenter au mieux ! Et tout cela à un prix abordable.</p>
              <h3 className="a-info__title">Couchage</h3>
              <p style={{ textAlign: 'justify'}}>Nous mettons à disposition des joueurs des loges communes avec un accès à l'eau et aux douches ! 
              Pensez à ramener vos duvets si vous souhaitez en profiter ! Nous metterons à disposition des tapis pour plus de confort.</p>
            </div>

            <Category id="players">Infos joueurs</Category>
            <div>
              <h3 className="a-info__title">Cashprize et lots</h3>
              <p>La répartition des récompenses entre les 3 premières places est la suivante :
              </p>
              <ul>
                <li>1<sup>ère</sup> place : Cashprize et lots</li>
                <li>2<sup>ème</sup> et 3<sup>ème</sup> places : Lots</li>
              </ul>
              <p>
                Cette année l'<span>UTT Arena</span> s'est associée avec de nombreux partenaires pour vous offrir des lots de qualité !
              </p>
              <h3 className="a-info__title">Ce qu'il faut apporter</h3>
              <ul>
                <li>Ton PC avec tous ces magnifiques périphériques</li>
                <li>Une multiprise si besoin (chaque joueur dispose d'une prise)</li>
                <li>Un câble RJ45</li>
              </ul>
              <p>Si tu ne souhaites pas ramener tout ça, nous te proposons de louer un PC avec notre partenaire Scoup E-sport et nous vendons des multiprises et des câbles RJ45 de 5 et 7m.</p>
              <h3 className="a-info__title">Ce qui est fourni</h3>
              <p>Une prise électrique et un port RJ45.</p>
              <p>Et vu qu'on t'aime bien, on t'offre aussi une place sur une table avec une chaise et l'accès aux loges, mais ça c'est juste pour toi !</p>
            </div>
            
            <Category id="faq">FAQ</Category>
            <div>
              <p>Voici des questions souvent posées, en espérant que cela pourra t'aider dans ta recherche jeune padawan !</p>
              <h3 className="a-info__title">Inscription</h3>

              {faqEntries}
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
  autoLogin: () => dispatch(autoLogin('/informations'))
})

export default connect(
  null,
  mapDispatchToProps
)(Informations)
