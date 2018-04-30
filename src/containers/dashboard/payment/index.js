import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Select from 'react-select'

import ListItem from '../../../components/list-item'
import Button from '../../../components/button'
import errorToString from '../../../lib/errorToString'

import { payment } from '../../../modules/payment'

import selectStyles from './select.styles'
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

    this.state = {
      plusone: false,
      ethernet: false,
      shirt: false,
      shirtGender: { value: 'H', label: 'Homme' },
      shirtSize: { value: 'M', label: 'M' }
    }

    this.isPartner = props.prices.partners.some(partner => props.user.email.endsWith(partner))

    this.switchToPlayer = this.switchToPlayer.bind(this)
    this.switchToPlusone = this.switchToPlusone.bind(this)
    this.toggleEthernet = this.toggleEthernet.bind(this)
    this.toggleShirt = this.toggleShirt.bind(this)
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

  changeGender(option) {
    this.setState({ shirtGender: option, shirt: true })
  }

  changeSize(option) {
    this.setState({ shirtSize: option, shirt: true })
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

    this.props.payment(basket)
  }

  render() {
    const playerPrice = this.isPartner ? this.props.prices.partner : this.props.prices.default

    const price =
      (this.state.plusone ? this.props.prices.plusone : playerPrice) +
      (this.state.ethernet ? this.props.prices.ethernet : 0) +
      (this.state.shirt ? this.props.prices.shirt : 0)

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
          <span>Place joueur.euse (tournoi ou hors tournoi)</span>
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
        <div className="a-dashboard-payment__separator" />
        {this.props.paymentError && (
          <strong className="error">{errorToString(this.props.paymentError)}</strong>
        )}
        <Button onClick={this.payment} raised>
          Payer {price}€
        </Button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  prices: state.user.prices,
  paymentError: state.payment.errorMessage
})

const mapDispatchToProps = dispatch => ({
  payment: body => dispatch(payment(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditInfos)
