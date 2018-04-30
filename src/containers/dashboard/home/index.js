import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { logout } from '../../../modules/login'

import List from '../../../components/list'
import ListItem from '../../../components/list-item'

const Home = props => [
  <h2 key="0">Mon équipe</h2>,
  <List key="1">
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
    <ListItem onClick={props.requests}>
      <h3>Mes demandes</h3>
      <span>La liste des demandes d'équipe que tu as faite</span>
    </ListItem>
  </List>,
  <h2 key="3">Mon compte</h2>,
  <List key="4">
    <ListItem onClick={props.payment}>
      <h3>Payer ma place</h3>
      <span>Paye ta place et récupère ton billet d'entrée ! Obligatoire pour les tournois</span>
    </ListItem>
    <ListItem onClick={props.editUser}>
      <h3>Éditer mes infos</h3>
      <span>Accède à ton profil et modifie tes informations si besoin</span>
    </ListItem>
    <ListItem onClick={props.logout}>
      <h3>Déconnexion</h3>
    </ListItem>
  </List>
]

const mapDispatchToProps = dispatch => ({
  editUser: () => dispatch(push('/dashboard/user')),
  payment: () => dispatch(push('/dashboard/payment')),
  requests: () => dispatch(push('/dashboard/requests')),
  logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Home)
