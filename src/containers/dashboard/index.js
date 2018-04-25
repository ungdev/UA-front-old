import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header'
import List from '../../components/list'
import ListItem from '../../components/list-item'

import { fetchCanLogin } from '../../modules/canLogin'
import { autoLogin, logout } from '../../modules/login'

import './dashboard.css'

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.autoLogin()
  }

  render() {
    return (
      <div>
        <Header arrow="/" />
        <main className="a-dashboard">
          <h1>Dashboard</h1>
          <h2>Mon équipe</h2>
          <List>
            <ListItem onClick={() => {}}>
              <h3>Créer une équipe</h3>
              <span>Crée ton équipe et invite tes amis à te rejoindre pour participez aux tournois !</span>
            </ListItem>
            <ListItem onClick={() => {}}>
              <h3>Rejoindre une équipe</h3>
              <span>Rejoins ton équipe de compétiteurs pour vous inscrire aux tournois !</span>
            </ListItem>
            <ListItem onClick={() => {}}>
              <h3>Mon équipe</h3>
              <span>Gère ton équipe, ses membres et vérifie son status d'inscription !</span>
            </ListItem>
            <ListItem onClick={() => {}}>
              <h3>Mes demandes</h3>
              <span>La liste des demandes d'équipe que tu as faite</span>
            </ListItem>
          </List>
          <h2>Mon compte</h2>
          <List>
            <ListItem onClick={() => {}}>
              <h3>Payer ma place</h3>
              <span>Paye ta place et récupère ton billet d'entrée ! Obligatoire pour les tournois</span>
            </ListItem>
            <ListItem onClick={() => {}}>
              <h3>Éditer mes infos</h3>
              <span>Accède à ton profil et modifie tes informations si besoin</span>
            </ListItem>
            <ListItem onClick={this.props.logout}>
              <h3>Déconnexion</h3>
            </ListItem>
          </List>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.token && state.login.token.length > 0
})

const mapDispatchToProps = dispatch => ({
  fetchCanLogin: () => dispatch(fetchCanLogin()),
  autoLogin: () => dispatch(autoLogin()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
