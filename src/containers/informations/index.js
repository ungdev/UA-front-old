import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../components/button'

import './informations.css'

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
            
              <div style={{textAlign: 'center', marginTop: '40px'}}>
                <Link to={"/gallery"}>
                  <Button raised>Voir les photos</Button>
                </Link>
              </div>
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
            <div className="a-infos__tickets">
              <p>Il est possible d'acheter une place sur ce site à partir du mercredi 17 octobre</p>
              <ul>
                <li>Il faut d'abord s'inscrire</li>
                <li>Ensuite, il faut payer sa place</li>
                <li>Chaque joueur paye sa place, <strong>il n'y a pas de paiement groupé</strong></li>
                <li>Le paiement se fait uniquement par carte banquaire</li>
              </ul>
              <br />
              <p>
                <strong>Les tarifs sont les suivants :</strong>
              </p>
              <ul>
                <li>Joueur : 15€</li>
                <li>Une réduction de 5€ sera appliquée aux joueurs provenant d'une école du groupe des Universités de Technologie : UTT, UTC, UTBM</li>
                <li>Accompagnateur : 6€ (limité à 40 places)</li>
              </ul>
            </div>
            
            <Category id="registration">Déroulement des inscriptions</Category>
            <div className="a-infos__registration">
              <p>Les inscriptions à l'UTT Arena ouvrent le mercredi 17 octobre (l'heure exacte sera annoncée dans la journée).</p>
              <p>Pour les tournois multijoueurs :</p>
              <ul>
                <li>Il faudra créer un compte sur ce site en cliquant sur le bouton <strong>connexion</strong>.</li>
                <li>Après avoir renseigné les informations du formulaire, il faudra <strong>valider son compte</strong> en cliquant sur le <strong>lien reçu par mail</strong>.</li>
                <li>Une fois dans votre dashboard, vous pourrez payer votre place, créer une équipe ou en rejoindre une.</li>
                <li>Une équipe ne sera <strong>complète</strong> lorsqu'elle sera <strong>pleine et que tous les membres auront payé leur place</strong>.</li>
                <li>Une équipe complète <strong>sera inscrite</strong> dans le tournoi <strong>si elle s'est complétée avant que le tournoi ne soit plein</strong>.
                Sinon, elle sera mise sur <strong>liste d'attente</strong>.</li>
                <li>Une équipe sur liste d'attente est considérée comme membre du tournoi libre, sauf si une équipe se désiste.</li>
              </ul>
              <p>Pour les tournois solo :</p>
              <ul>
                <li>Il faudra créer un compte sur ce site en cliquant sur le bouton <strong>connexion</strong>.</li>
                <li>Après avoir renseigné les informations du formulaire, il faudra <strong>valider son compte</strong> en cliquant sur le <strong>lien reçu par mail</strong>.</li>
                <li>Une fois dans votre dashboard, vous pourrez payer votre place et rejoindre un tournoi solo.</li>
                <li>Vous ne serez inscrit que <strong>lorsque vous aurez payé votre place</strong>.</li>
                <li>Si vous ne payez pas votre place à temps, vous serez mis sur <strong>liste d'attente</strong>.</li>
                <li>Un joueur sur liste d'attente est considéré comme <strong>membre du tournoi libre</strong>, sauf si un joueur se désiste.</li>
              </ul>
            </div>

            <Category id="access">Accès</Category>
            <div>
              <p>
                Adresse de l'événement : 20 rue des Gayettes, 10000 Troyes
              </p>
              <h3 className="a-infos__title">En voiture</h3>
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
              <h3 className="a-infos__title">En train</h3>
              <p>&Agrave; 1h30 de Paris (TER depuis Paris-Est, départ toutes les heures). Le Cube est à 10 minutes à pied de la gare.</p>
              <h3 className="a-infos__title">En bus</h3>
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
              <h3 className="a-infos__title">Nourriture</h3>
              <p style={{ textAlign: 'justify'}}>On sait qu'un weekend de 48h non-stop ça creuse, nous te proposerons donc sur place : croques-monsieur, crêpes, pizzas, canettes, snack, tout
               pour te sustenter au mieux ! Et tout cela à un prix abordable.</p>

              <h3 className="a-infos__title">Couchage</h3>
              <p style={{ textAlign: 'justify'}}>Nous mettons à disposition des joueurs des loges communes avec un accès à l'eau et aux douches ! 
              Pensez à ramener vos duvets si vous souhaitez en profiter ! Nous metterons à disposition des tapis pour plus de confort.</p>

              <h3 className="a-infos__title">Location de matériel</h3>
              <p style={{ textAlign: 'justify' }}>Pas envie de ramener tout ton matériel ? Notre partenaire Scoup eSport te propose de louer PC, chaise gaming, casque, souris et tout ce dont tu as besoin !</p>
              <p className="a-infos__services__infos">(Les prix vous permettent de bénéficier du matériel pendant toute la durée de l'événement.)</p>

              <div className="a-infos__table__container">
                <table className="a-infos__services__table">
                  <thead>
                    <tr>
                      <th>Matériel</th>
                      <th>Prix</th>
                      <th>Informations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Kaliento</td>
                      <td>5€</td>
                      <td>Chauffeur de main électrique Kaliento</td>
                    </tr>
                    <tr>
                      <td>Souris gaming</td>
                      <td>5€</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Clavier gaming</td>
                      <td>10€</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Casque gaming</td>
                      <td>15€</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>&Eacute;cran 24"</td>
                      <td>35€</td>
                      <td>&Eacute;cran 24" 144Hz</td>
                    </tr>
                    <tr>
                      <td>&Eacute;cran 27"</td>
                      <td>40€</td>
                      <td>&Eacute;cran 27" 144Hz</td>
                    </tr>
                    <tr>
                      <td>Chaise gaming</td>
                      <td>45€</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>PC gaming</td>
                      <td>95€</td>
                      <td>
                        <ul>
                          <li>CPU : Intel core i5 7100 3.6 GHz</li>
                          <li>RAM : 8 Go DDR 4</li>
                          <li>GPU : GTX 1050Ti 4Gb</li>
                          <li>Carte mère Z170 Serie</li>
                          <li>Alimentation 430W</li>
                          <li>Watercooling 120</li>
                          <li>SSD 120 Go</li>
                          <li>Disque dur 1 To</li>
                          <li>Boitier ANTEC P7</li>
                          <li>Windows 10 Professionnel</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>PC streaming</td>
                      <td>120€</td>
                      <td>
                        <ul>
                          <li>CPU : Intel core i7 6700K 3.6 GHz</li>
                          <li>RAM : 16 Go DDR 4</li>
                          <li>GPU : GTX 1080</li>
                          <li>Carte mère Z170 Serie</li>
                          <li>Alimentation 650W Gold</li>
                          <li>Watercooling 120</li>
                          <li>SSD 250 Go</li>
                          <li>Disque dur 1 To</li>
                          <li>Boitier ANTEC P8</li>
                          <li>Windows 10 Professionnel</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>PC portable gaming</td>
                      <td>130€</td>
                      <td>
                        PC portable MSI
                        <ul>
                          <li>CPU : i7</li>
                          <li>RAM : 32 Go</li>
                          <li>GPU : GTX 1060</li>
                          <li>&Eacute;cran 17"</li>
                          <li>Windows 10 Professionnel</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Pour louer du matériel, il faudra choisir les objets lors de l'inscription et les ajouter à votre panier. Attention, l'offre n'est valable que jusqu'au 6 décembre à 18h. Pensez bien à ajouter les objets lors de votre inscription, il ne sera plus possible après coup d'en commander.</p>
            </div>

            <Category id="players">Infos joueurs</Category>
            <div>
              <p><strong>Rappel : l'âge minimum pour participer au tournoi est de 15 ans.</strong></p>

              <h3 className="a-infos__title">Cashprize et lots</h3>
              <p>La répartition des récompenses entre les 3 premières places est la suivante :
              </p>
              <ul>
                <li>1<sup>ère</sup> place : Cashprize et lots</li>
                <li>2<sup>ème</sup> et 3<sup>ème</sup> places : Lots</li>
              </ul>
              <p>
                Cette année l'<span>UTT Arena</span> s'est associée avec de nombreux partenaires pour vous offrir des lots de qualité !
              </p>

              <h3 className="a-infos__title">Ce qu'il faut apporter</h3>
              <ul>
                <li>Ton PC avec tous ces magnifiques périphériques</li>
                <li>Une multiprise si besoin (chaque joueur dispose d'une prise)</li>
                <li>Un câble RJ45</li>
              </ul>
              <p>Si tu ne souhaites pas ramener tout ça, nous te proposons de louer un PC avec notre partenaire Scoup eSport. De plus nous vendons des multiprises et des câbles RJ45 de 5 et 7m.</p>
              <h3 className="a-infos__title">Ce qui est fourni</h3>
              <p>Une prise électrique et un port RJ45.</p>
              <p>Et vu qu'on t'aime bien, on t'offre aussi une place sur une table avec une chaise et l'accès aux loges, mais ça c'est juste pour toi !</p>
              <h3 className="a-infos__title">Streaming</h3>
              <p>Pour les joueurs souhaitant streamer pendant la LAN, il faudra en faire la demande au moins 2 semaines avant l'UA, et nous vous autoriserons peut-être à streamer.
              Nous nous réserverons le droit d'empêcher le stream si le réseau ne le permet pas.</p>
            </div>
            
            <Category id="faq">FAQ</Category>
            <div>
              <p>Voici des questions souvent posées, en espérant que cela pourra t'aider dans ta recherche jeune padawan !</p>

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
