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

const TeamManagement = props => {
  const spotlight = props.spotlights.find(s => s.id === props.user.team.spotlightId)
  return (
  <div className="a-teammanagement a-dashboard-page">
    <h2>{props.user.team.name}</h2>
    <h4>{props.user.team.spotlight.name}</h4>
    {props.user.team.soloTeam && <div style={{ width: '100%', textAlign: 'center' }}><span className="a-teammanagement__solo" style={{ textAlign: 'center' }}>(Équipe Solo)</span></div>}
    <div className="a-teammanagement__badge">
      <StatusBadge theme={props.teamStatus.theme}>{props.teamStatus.status}</StatusBadge>
    </div>
    {!props.user.team.isInSpotlight && props.teamStatus.complete === 1 && props.spotlightFull && (
      <p className="a-teammanagement__warning">
        <span className="a-teammanagement__warning__sign">
          <span role="img" aria-label="warning-sign">
            ⚠️
          </span>Attention
        </span>&nbsp;
        <strong>Le tournoi dans lequel vous vous êtes inscrits est plein. </strong>
        D'autres équipes se sont complétées plus rapidement. À moins qu'une équipe se désiste,
        vous ne pouvez plus participer au tournoi. Vous êtes donc concidéré comme membre du tournoi libre.
        Vous pouvez aussi recréer une autre équipe dans un autre spotlight s'il reste des places dans ceux-ci.
      </p>
    )}
    {props.user.team.isInSpotlight && (
      <p className="a-teammanagement__warning">
      Vous n'avez plus rien à faire à part venir avec votre matériel le 7 décembre (ou le 8 si vous ne pouvez pas avant). <br/>
      Restez informé via <a href="https://www.facebook.com/UTTArena/">la page facebook de l'UTT Arena</a>.
      </p>
    )}
    {props.teamStatus.complete === 0 && props.spotlightFull && (
      <p className="a-teammanagement__warning">
        <span className="a-teammanagement__warning__sign">
          <span role="img" aria-label="warning-sign">
            ⚠️
          </span>Attention
        </span>&nbsp;
        <strong>Le tournoi est plein</strong> et <strong>l'équipe est incomplète</strong>. <br/>
        Pour que l'équipe soit complète, il faut que les {spotlight.perTeam} membres aient rejoint l'équipe
        <strong> et</strong> aient payé leur place. Vous serez alors mis sur liste d'attente, au cas où une équipe se désiste.
        Vous pouvez rejoindre un autre tournoi en créant une nouvelle équipe dans le tournoi choisi, en attendant, vous êtes
        considérés comme membre du tournoi libre.
      </p>
    )}
    {props.teamStatus.complete === 0 && !props.spotlightFull && (
      <p className="a-teammanagement__warning">
        <span className="a-teammanagement__warning__sign">
          <span role="img" aria-label="warning-sign">
            ⚠️
          </span>Attention
        </span>&nbsp;
        <strong>Tous les membres de l'équipe</strong> doivent avoir rejoint <strong>et</strong> payé leur place pour valider
        l'inscription au spotlight ({spotlight.perTeam} personnes pour le tournoi {spotlight.name}
        ). <br/><br/>Si vous validez votre inscription trop tard, vous serez mis sur liste d'attente.
        Une équipe en liste d'attente est concidérée comme participant au tournoi libre, sauf si une
        place pour elle se libère dans le tournoi spotlight. Alors dépêchez vous ;)
      </p>
    )}

    <h3>Membres</h3>
    <TeamTable
      captain={props.user.team.captainId}
      players={props.user.team.users}
      spotlight={props.user.team.spotlight}
    />
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
}

const mapStateToProps = state => ({
  user: state.user.user,
  teamStatus: teamStatus(state),
  spotlights: state.spotlights.spotlights,
  isCaptain: state.user.user.team.captainId === state.user.user.id,
  spotlightFull: (state.spotlights.spotlights.find(s => s.id === state.user.user.team.spotlightId) || {}).isFull,
  // allow refuse and kick error
  askingPlayers: state.teams.teams.find(team => team.id === state.user.user.team.id).askingUsers,
  kickablePlayers: state.user.user.team.users
    .filter(user => user.id !== state.user.user.id)
    .map(user => ({ label: `${user.firstname} ${user.lastname} (${user.name})`, value: user.id }))
})

const mapDispatchToProps = dispatch => ({
  allowPlayer: player => dispatch(allowPlayer(player)),
  refusePlayer: player => dispatch(refusePlayer(player)),
  kickPlayer: ({ player }) => window.confirm(`Virrer le joueur de l'équipe ?`) && dispatch(kickPlayer(player.value)),
  selfKick: () => window.confirm(`Quitter l'équipe ?`) && dispatch(kickPlayer('self'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamManagement)
