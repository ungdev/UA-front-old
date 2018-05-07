import React from 'react'
import { connect } from 'react-redux'

import StatusBadge from '../../../components/statusBadge'
import List from '../../../components/list'
import ListItem from '../../../components/list-item'
import TeamTable from './teamTable'
import teamStatus from '../../../lib/teamStatus'

import { allowPlayer, refusePlayer } from '../../../modules/teams'

import './teamManagement.css'

const askingPlayer = function (player, i) {
  return (
    <ListItem key={i} clickable={false}>
      <span className="a-teammanagement__asking-name">{player.name}</span>
      <span className="a-teammanagement__asking-message">{player.askingMessage}</span>
      {this.isCaptain && (
        <span className="a-teammanagement__asking-link">
          <span onClick={() => this.allowPlayer(player.id)}>Accepter</span>
          <span onClick={() => this.refusePlayer(player.id)}>Refuser</span>
        </span>
      )}
    </ListItem>
  )
}

const TeamManagement = props => (
  <div className="a-teammanagement a-dashboard-page">
    <h2>{props.user.team.name}</h2>
    <h3>Membres</h3>
    {props.user.team.soloTeam && <span className="a-teammanagement__solo">Équipe mono-joueur</span>}
    <div className="a-teammanagement__badge">
      <StatusBadge theme={props.teamStatus.theme}>{props.teamStatus.status}</StatusBadge>
    </div>
    {props.teamStatus.theme !== 'success' && <p className="a-teammanagement__warning">
      <span className="a-teammanagement__warning__sign">&#9888;Attention</span>&nbsp;
      <strong>Tous les membres de l'équipe</strong> doivent avoir payé leur place pour valider l'inscription au spotlight (5 personnes ayant payé leur place pour s'inscrire au tournoi LoL, etc.).
    </p>}
    <TeamTable
      players={props.user.team.users}
      spotlight={props.user.team.spotlight}></TeamTable>
    <h3>Demandes</h3>
    {!props.askingPlayers.length && <p className="a-no-asking-players">Aucune demande en cours</p>}
    <List>
      {props.askingPlayers.map(askingPlayer.bind(props))}
    </List>
  </div>
)

const mapStateToProps = state => ({
  user: state.user.user,
  teamStatus: teamStatus(state),
  isCaptain: state.user.user.team.captainId === state.user.user.id,
  askingPlayers: state.teams.teams
      .find(team => team.id === state.user.user.team.id)
      .askingUsers
})

const mapDispatchToProps = dispatch => ({
  allowPlayer: player => dispatch(allowPlayer(player)),
  refusePlayer: player => dispatch(refusePlayer(player))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamManagement)
