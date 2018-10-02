import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Select from 'react-select'

import ListItem from '../../../components/list-item'
import Button from '../../../components/button'
import selectStyles from '../../../components/select/styles'

import { payment } from '../../../modules/payment'

import './payment.css'

const shirtGenders = [{ label: 'Homme', value: 'M' }, { label: 'Femme', value: 'F' }]

const shirtSizes = [
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' }
]

class EditInfos extends React.Component {
  constructor(props) {
    super()
    const { user } = props
    this.state = {
      plusone: user? user.plusone : false,
      ethernet: user? user.ethernet : false,
      shirt: user? (user.shirt && user.shirt !== 'none') : false,
      kaliento: user? user.kaliento : false,
      mouse: user? user.mouse : false,
      keyboard: user? user.keyboard : false,
      headset: user? user.headset : false,
      screen24: user? user.screen24 : false,
      screen27: user? user.screen27 : false,
      chair: user? user.chair : false,
      gamingPC: user? user.gamingPC : false,
      streamingPC: user? user.streamingPC : false,
      laptop: user? user.laptop : false,
      tombola: 0,
      shirtGender: { value: 'H', label: 'Homme' },
      shirtSize: { value: 'M', label: 'M' }
    }

    this.isPartner = props.prices.partners.some(partner => props.user.email.endsWith(partner))

    this.switchToPlayer = this.switchToPlayer.bind(this)
    this.switchToPlusone = this.switchToPlusone.bind(this)
    this.toggleEthernet = this.toggleEthernet.bind(this)
    this.toggleShirt = this.toggleShirt.bind(this)
    this.toggleKaliento = this.toggleKaliento.bind(this)
    this.toggleMouse = this.toggleMouse.bind(this)
    this.toggleKeyboard = this.toggleKeyboard.bind(this)
    this.toggleHeadset = this.toggleHeadset.bind(this)
    this.toggleScreen24 = this.toggleScreen24.bind(this)
    this.toggleScreen27 = this.toggleScreen27.bind(this)
    this.toggleChair = this.toggleChair.bind(this)
    this.toggleGamingPC = this.toggleGamingPC.bind(this)
    this.toggleStreamingPC = this.toggleStreamingPC.bind(this)
    this.toggleLaptop = this.toggleLaptop.bind(this)
    this.onTombolaChange = this.onTombolaChange.bind(this)
    this.changeGender = this.changeGender.bind(this)
    this.changeSize = this.changeSize.bind(this)
    this.payment = this.payment.bind(this)
  }

  switchToPlayer() {
    this.setState({ plusone: false })
  }

  switchToPlusone() {
    this.setState({ plusone: true })
  }

  toggleEthernet() {
    this.setState({ ethernet: !this.state.ethernet })
  }

  toggleShirt() {
    this.setState({ shirt: !this.state.shirt })
  }

  toggleKaliento() {
    this.setState({ kaliento: !this.state.kaliento })
  }

  toggleMouse() {
    this.setState({ mouse: !this.state.mouse })
  }

  toggleKeyboard() {
    this.setState({ keyboard: !this.state.keyboard })
  }

  toggleHeadset() {
    this.setState({ headset: !this.state.headset })
  }

  toggleScreen24() {
    this.setState({ screen24: !this.state.screen24 })
  }

  toggleScreen27() {
    this.setState({ screen27: !this.state.screen27 })
  }

  toggleChair() {
    this.setState({ chair: !this.state.chair })
  }

  toggleGamingPC() {
    this.setState({ gamingPC: !this.state.gamingPC })
  }

  toggleStreamingPC() {
    this.setState({ streamingPC: !this.state.streamingPC })
  }

  toggleLaptop() {
    this.setState({ laptop: !this.state.laptop })
  }

  changeGender(option) {
    this.setState({ shirtGender: option, shirt: true })
  }

  changeSize(option) {
    this.setState({ shirtSize: option, shirt: true })
  }

  onTombolaChange(e){
    if(e.target.value >= 0) this.setState({ tombola: parseInt(e.target.value)})
  }

  payment() {
    const basket = {
      plusone: this.state.plusone,
      ethernet: this.state.ethernet
    }

    if (this.state.shirt) {
      basket.shirtGender = this.state.shirtGender.value
      basket.shirtSize = this.state.shirtSize.value
    }

    if (this.state.kaliento) basket.kaliento = this.state.kaliento
    if (this.state.mouse) basket.mouse = this.state.mouse
    if (this.state.keyboard) basket.keyboard = this.state.keyboard
    if (this.state.headset) basket.headset = this.state.headset
    if (this.state.screen24) basket.screen24 = this.state.screen24
    if (this.state.screen27) basket.screen27 = this.state.screen27
    if (this.state.chair) basket.chair = this.state.chair
    if (this.state.gamingPC) basket.gamingPC = this.state.gamingPC
    if (this.state.streamingPC) basket.streamingPC = this.state.streamingPC
    if (this.state.laptop) basket.laptop = this.state.laptop
    if (this.state.tombola > 0) basket.tombola = this.state.tombola

    this.props.payment(basket) 
  }

  render() {
    const playerPrice = this.isPartner ? this.props.prices.partner : this.props.prices.default
    const price =
      (this.state.plusone ? this.props.prices.plusone : playerPrice) +
      (this.state.ethernet ? this.props.prices.ethernet : 0) +
      (this.state.shirt ? this.props.prices.shirt : 0) +
      (this.state.kaliento ? this.props.prices.kaliento : 0) +
      (this.state.mouse ? this.props.prices.mouse : 0) +
      (this.state.keyboard ? this.props.prices.keyboard : 0) +
      (this.state.headset ? this.props.prices.headset : 0) +
      (this.state.screen24 ? this.props.prices.screen24 : 0) +
      (this.state.screen27 ? this.props.prices.screen27 : 0) +
      (this.state.chair ? this.props.prices.chair : 0) +
      (this.state.gamingPC ? this.props.prices.gamingPC : 0) +
      (this.state.streamingPC ? this.props.prices.streamingPC : 0) +
      (this.state.laptop ? this.props.prices.laptop : 0) +
      (this.state.tombola > 0 ? this.state.tombola : 0)

    return (
      <form className="a-dashboard-page a-dashboard-payment">
        <h2>Paiement de la place</h2>
        <p>
          Toutes les places vous donne accès à l’ensemble du Festival des Jeux et de la LAN, et
          permet de rester à l'UTT Arena et ce même en dehors des horaires d'ouverture du Festival.
          Vous êtes d'une école partenaire et le prix n'est pas réduit ? Vérifiez votre e-mail dans{' '}
          <Link to="/dashboard/user">vos infos</Link>.
          <br />
          <br />
          Le paiement se déroule sur un site sécurisé.
        </p>
        <ListItem price={playerPrice} active={!this.state.plusone} onClick={this.switchToPlayer}>
          <h3>Place joueur</h3>
          <span>Place joueur.euse (tournoi spotlight ou libre). Permet d'avoir une place assise attitrée (sauf Super Smash Bros Ultimate)</span>
        </ListItem>
        <ListItem
          price={this.props.prices.plusone}
          active={this.state.plusone}
          onClick={this.switchToPlusone}
        >
          <h3>Place visiteur</h3>
          <span>Réservé aux accompagnateurs.rices</span>
        </ListItem>
        <div className="a-dashboard-payment__separator" />
        <ListItem
          price={`+${this.props.prices.ethernet}`}
          active={this.state.ethernet}
          onClick={this.toggleEthernet}
        >
          <h3>Câble ethernet</h3>
          <span>
            Un câble (<strong>5m</strong>) est requis pour se brancher au switchs de tables
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.shirt}`}
          active={this.state.shirt}
          onClick={this.toggleShirt}
        >
          <h3>T-Shirt UA 2018</h3>
          <span>Un t-shirt souvenir de cette LAN de folie</span>
          <div onClick={e => e.stopPropagation()}>
            <Select
              options={shirtGenders}
              defaultValue={this.state.shirtGender}
              onChange={this.changeGender}
              isSearchable={false}
              styles={selectStyles}
            />
            <Select
              options={shirtSizes}
              defaultValue={this.state.shirtSize}
              onChange={this.changeSize}
              isSearchable={false}
              styles={selectStyles}
            />
          </div>
        </ListItem>
        <ListItem
          price={`+${parseInt(this.state.tombola)}`}
          active={this.state.tombola > 0}
          onClick={() => this.setState({ tombola: this.state.tombola + 1 })}
        >
          <h3>Tombola</h3>
          <span>Acheter des tickets de tombola à 1€ par ticket</span>
          <div style={{ marginTop: '10px'}} onClick={e => e.stopPropagation()} >
            <input type="number" name="tombola" value={`${this.state.tombola}`} onChange={this.onTombolaChange} />
          </div>
        </ListItem>
        <div className="a-dashboard-payment__separator" />
        <h2>Locations (via notre partenaire Scoup Esport)</h2>
        <ListItem
          price={`+${this.props.prices.kaliento}`}
          active={this.state.kaliento}
          onClick={this.toggleKaliento}
        >
          <h3>Kaliento</h3>
          <span>
            Louer un chauffeur de main électrique Kaliento
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.mouse}`}
          active={this.state.mouse}
          onClick={this.toggleMouse}
        >
          <h3>Souris</h3>
          <span>
          Louer une souris gaming
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.keyboard}`}
          active={this.state.keyboard}
          onClick={this.toggleKeyboard}
        >
          <h3>Clavier</h3>
          <span>
            Louer un clavier mécanique
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.headset}`}
          active={this.state.headset}
          onClick={this.toggleHeadset}
        >
          <h3>Casque</h3>
          <span>
            Louer un casque gaming
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.screen24}`}
          active={this.state.screen24}
          onClick={this.toggleScreen24}
        >
          <h3>Ecran 24"</h3>
          <span>
            Louer un écran 24" 144Hz
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.screen27}`}
          active={this.state.screen27}
          onClick={this.toggleScreen27}
        >
          <h3>Ecran 27"</h3>
          <span>
            Louer un écran 27" 144Hz
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.chair}`}
          active={this.state.chair}
          onClick={this.toggleChair}
        >
          <h3>Chaise Gaming</h3>
          <span>
            Louer une chaise gaming, confort assuré !
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.gamingPC}`}
          active={this.state.gamingPC}
          onClick={this.toggleGamingPC}
        >
          <h3>Ordinateur Gaming</h3>
          <span>
            Louer une toure de gaming avec une configuration X
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.streamingPC}`}
          active={this.state.streamingPC}
          onClick={this.toggleStreamingPC}
        >
          <h3>Ordinateur Streaming</h3>
          <span>
            Louer une tour de streamer avec une configuration X
          </span>
        </ListItem>
        <ListItem
          price={`+${this.props.prices.laptop}`}
          active={this.state.laptop}
          onClick={this.toggleLaptop}
        >
          <h3>PC Portable</h3>
          <span>
            Louer un PC portable avec une configuration X
          </span>
        </ListItem>
        <div className="a-dashboard-payment__separator" />
        <Button onClick={this.payment} raised>
          Payer {price}€
        </Button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  prices: state.user.prices
})

const mapDispatchToProps = dispatch => ({
  payment: body => dispatch(payment(body))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInfos)
