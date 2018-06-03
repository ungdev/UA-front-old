import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-form'

import StatusBadge from '../../../components/statusBadge'
import List from '../../../components/list'
import ListItem from '../../../components/list-item'
import Select from '../../../components/select'
import Button from '../../../components/button'
import TeamTable from './teamTable'
import teamStatus from '../../../lib/teamStatus'

import { allowPlayer, refusePlayer, kickPlayer } from '../../../modules/teams'

import './teamManagement.css'

const askingPlayer = function(player, i) {
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
    {props.teamStatus.theme !== 'success' && (
      <p className="a-teammanagement__warning">
        <span className="a-teammanagement__warning__sign"><span role="img" aria-label="warning-sign">⚠️</span>Attention</span>&nbsp;
        <strong>Tous les membres de l'équipe</strong> doivent avoir payé leur place pour valider
        l'inscription au spotlight (5 personnes ayant payé leur place pour s'inscrire au tournoi
        LoL, etc.).
      </p>
    )}
    <TeamTable captain={props.user.team.captainId} players={props.user.team.users} spotlight={props.user.team.spotlight} />
    <h3>Demandes</h3>
    {!props.askingPlayers.length && <p className="a-no-asking-players">Aucune demande en cours</p>}
    <List>{props.askingPlayers.map(askingPlayer.bind(props))}</List>

    {/* Kick */}
    {props.isCaptain && props.kickablePlayers.length > 0 && <h3>Kick</h3>}
    {props.isCaptain &&
      props.kickablePlayers.length > 0 && (
        <Form
          onSubmit={props.kickPlayer}
          defaultValues={{
            player: props.kickablePlayers[0]
          }}
          render={({ submitForm }) => (
            <form onSubmit={submitForm} className="a-teammanagement__kick">
              <Select
                field="player"
                placeholder="Joueur"
                isClearable={false}
                backspaceRemovesValue={false}
                isSearchable={false}
                options={props.kickablePlayers}
              />
              <Button theme="error" type="submit" raised={true}>
                Kick
              </Button>
            </form>
          )}
        />
      )}

    {/* Leave */}
    <h3>Partir</h3>
    <div className="a-teammanagement__leave">
      {props.isCaptain && (
        <strong className="error">Quitter l'équipe en tant que capitaine la dissoudrera</strong>
      )}
      <Button raised={true} onClick={props.selfKick} theme="error">
        Quitter l'équipe
      </Button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  user: state.user.user,
  teamStatus: teamStatus(state),
  isCaptain: state.user.user.team.captainId === state.user.user.id,
  // allow refuse and kick error
  askingPlayers: state.teams.teams.find(team => team.id === state.user.user.team.id).askingUsers,
  kickablePlayers: state.user.user.team.users
    .filter(user => user.id !== state.user.user.id)
    .map(user => ({ label: user.fullname, value: user.id }))
})

const mapDispatchToProps = dispatch => ({
  allowPlayer: player => dispatch(allowPlayer(player)),
  refusePlayer: player => dispatch(refusePlayer(player)),
  kickPlayer: ({ player }) => dispatch(kickPlayer(player.value)),
  selfKick: () => dispatch(kickPlayer('self'))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamManagement)
