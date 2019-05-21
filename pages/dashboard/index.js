import React from 'react'

import { connect } from 'react-redux'

import './dashboard.css'
import List from '../../src/components/list'
import ListItem from '../../src/components/list-item'
import { sendTicket } from '../../src/modules/user'
import { logout } from '../../src/modules/login'
import withDashboardLayout from '../../src/layouts/dashboardLayout'
import DashboardWarnings from '../../src/components/dashboardWarnings'
import Link from 'next/link'

const Home = props => {
  // noinspection HtmlUnknownTarget
  return (
    <React.Fragment>
      <h2 key="0">Équipes</h2>
      <DashboardWarnings user={props.user} />
      <List key="1">
        {props.user && !props.user.team && !props.user.plusone && (
          <Link href="/dashboard/createTeam">
            <ListItem clickable={true}>
              <h3>Créer une équipe</h3>
              <span>
                Crée ton équipe et invite tes amis à te rejoindre pour participer aux tournois !
              </span>
            </ListItem>
          </Link>
        )}
        {props.user && !props.user.team && !props.user.plusone && (
          <Link href="/dashboard/joinTeam">
            <ListItem clickable={true}>
              <h3>Rejoindre une équipe</h3>
              <span>Rejoins ton équipe de compétiteurs pour vous inscrire aux tournois !</span>
            </ListItem>
          </Link>
        )}
        {props.user && !props.user.team && !props.user.plusone && (
          <Link href="/dashboard/solo">
            <ListItem clickable={true}>
              <h3>Rejoindre un tournoi solo</h3>
              <span>
                Pour rejoindre le tournoi Hearthstone ou Super Smash Bros Ultimate, c'est par ici !
              </span>
            </ListItem>
          </Link>
        )}
        {props.user && !props.user.team && !props.user.plusone && (
          <Link href="/dashboard/requests">
            <ListItem clickable={true}>
              <h3>Mes demandes</h3>
              <span>La liste des demandes d'équipe que tu as faites</span>
            </ListItem>
          </Link>
        )}
        {props.user && props.user.team && !props.user.plusone && (
          <Link href="/dashboard/team">
            <ListItem clickable={true}>
              <h3>{props.user.team.name}</h3>
              <span>Gère ton équipe, ses membres et vérifie son statut d'inscription !</span>
            </ListItem>
          </Link>
        )}
        <Link href="/dashboard/participants">
          <ListItem clickable={true}>
            <h3>Liste des participants</h3>
            <span>Tu veux voir qui est inscrit ? C'est possible ici !</span>
          </ListItem>
        </Link>
      </List>
      ,<h2 key="3">{props.user ? props.user.name : ''}</h2>,
      <List key="4">
        {props.user && !props.user.paid ? (
          <Link href="/dashboard/payment">
            <ListItem clickable={true}>
              <h3>Payer ma place</h3>
              <span>
                Paye ta place et récupère ton billet d'entrée ! Obligatoire pour les tournois
              </span>
            </ListItem>
          </Link>
        ) : (
          <ListItem clickable={false}>
            <h3>Payer ma place</h3>
            <span>Tu as déjà payé ta place ;)</span>
          </ListItem>
        )}
        {props.user && props.user.paid ? (
          <Link href="/dashboard/shop">
            <ListItem clickable={true}>
              <h3>Magasin</h3>
              <span>Vous souhaitez précommander du matériel ? C'est ici !</span>
            </ListItem>
          </Link>
        ) : null}
        {props.user && props.user.paid ? (
          <Link href="/dashboard/items">
            <ListItem clickable={true}>
              <h3>Inventaire</h3>
              <span>Tu ne te souviens pas de ce que tu as acheté ? Tu trouveras la liste ici.</span>
            </ListItem>
          </Link>
        ) : null}
        <Link href="/dashboard/user">
          <ListItem clickable={true}>
            <h3>Éditer mes infos</h3>
            <span>Accède à ton profil et modifie tes informations si besoin</span>
          </ListItem>
        </Link>
        {props.user && props.user.paid && (
          <ListItem clickable={true} onClick={props.sendTicket}>
            <h3>Renvoyer ma place</h3>
            <span>Vous souhaitez que l'on vous renvoie votre place par mail ? C'est ici !</span>
          </ListItem>
        )}
        <ListItem clickable={true} onClick={props.logout}>
          <h3>Déconnexion</h3>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  sendTicket: () => dispatch(sendTicket())
})

export default withDashboardLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
