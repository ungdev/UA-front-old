import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-form'

import StatusBadge from '../../../src/components/statusBadge'
import List from '../../../src/components/list'
import ListItem from '../../../src/components/list-item'
import Select from '../../../src/components/select'
import Button from '../../../src/components/button'
import TeamTable from './teamTable'
import teamStatus from '../../../src/lib/teamStatus'
import ConfirmModal from '../../../src/components/confirmModal'

import { allowPlayer, refusePlayer, kickPlayer } from '../../../src/modules/teams'

import './team.css'
import DashboardLayout from '../../../src/layouts/dashboardLayout'

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

class TeamManagement extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      confirmOpen: false,
      confirmMessage: null,
      onConfirm: null
    }
  }

  openConfirm = (message) => {
    this.setState({
      confirmOpen: true,
      confirmMessage: message
    })
  }

  closeConfirm = () => {
    this.setState({
      confirmOpen: false
    })
  }

  confirmKickPlayer = (form) => {
    this.setState({
      confirmOpen: true,
      confirmMessage: `Êtes-vous sûr de virer le joueur de l'équipe ?`,
      onConfirm: () => this.props.kickPlayer(form)
    })
  }

  confirmQuitTeam = () => {
    this.setState({
      confirmOpen: true,
      confirmMessage: `Êtes-vous sûr de quitter l'équipe ?`,
      onConfirm: this.props.selfKick
    })
  }

  render() {
    return this.props.user === null ? <DashboardLayout/> : this.renderClient()
  }

  renderClient() {
    const spotlight = this.props.spotlights.find(s => s.id === this.props.user.team.spotlightId)


    return (
      <DashboardLayout>
        <ConfirmModal isOpen={this.state.confirmOpen} message={this.state.confirmMessage} onClose={this.closeConfirm} onConfirm={this.state.onConfirm}/>
        <div className="a-teammanagement a-dashboard-page">
          <h2>{this.props.user.team.name}</h2>
          <h4>{this.props.user.team.spotlight.name}</h4>
          {this.props.user.team.soloTeam && (
            <div className="a-teammanagement__solo">(Équipe Solo)</div>
          )}
          <div className="a-teammanagement__badge">
            <StatusBadge theme={this.props.teamStatus.theme}>{this.props.teamStatus.status}</StatusBadge>
          </div>
          {!this.props.user.team.isInSpotlight && this.props.teamStatus.complete === 1 && this.props.spotlightFull && (
            <p className="a-teammanagement__warning">
            <span className="a-teammanagement__warning__sign">
              <span role="img" aria-label="warning-sign">
                ⚠️
              </span>
              Attention
            </span>
              &nbsp;
              <strong>Le tournoi dans lequel vous vous êtes inscrits est plein. </strong>
              D'autres équipes se sont complétées plus rapidement. À moins qu'une équipe se désiste,
              vous ne pouvez plus participer au tournoi. Vous êtes donc concidéré comme membre du
              tournoi libre. Vous pouvez aussi recréer une autre équipe dans un autre spotlight s'il
              reste des places dans ceux-ci.
            </p>
          )}
          {this.props.user.team.isInSpotlight && (
            <p className="a-teammanagement__warning">
              Vous n'avez plus rien à faire à part venir avec votre matériel le 7 décembre (ou le 8 si
              vous ne pouvez pas avant). <br />
              Restez informé via{' '}
              <a href="https://www.facebook.com/UTTArena/">la page facebook de l'UTT Arena</a>.
            </p>
          )}
          {this.props.teamStatus.complete === 0 && this.props.spotlightFull && (
            <p className="a-teammanagement__warning">
            <span className="a-teammanagement__warning__sign">
              <span role="img" aria-label="warning-sign">
                ⚠️
              </span>
              Attention
            </span>
              &nbsp;
              <strong>Le tournoi est plein</strong> et <strong>l'équipe est incomplète</strong>.{' '}
              <br />
              Pour que l'équipe soit complète, il faut que les {spotlight.perTeam} membres aient
              rejoint l'équipe
              <strong> et</strong> aient payé leur place. Vous serez alors mis sur liste d'attente, au
              cas où une équipe se désiste. Vous pouvez rejoindre un autre tournoi en créant une
              nouvelle équipe dans le tournoi choisi, en attendant, vous êtes considérés comme membre
              du tournoi libre.
            </p>
          )}
          {this.props.teamStatus.complete === 0 && !this.props.spotlightFull && (
            <p className="a-teammanagement__warning">
            <span className="a-teammanagement__warning__sign">
              <span role="img" aria-label="warning-sign">
                ⚠️
              </span>
              Attention
            </span>
              &nbsp;
              <strong>Tous les membres de l'équipe</strong> doivent avoir rejoint <strong>et</strong>{' '}
              payé leur place pour valider l'inscription au spotlight ({spotlight.perTeam} personnes
              pour le tournoi {spotlight.name}
              ). <br />
              <br />
              Si vous validez votre inscription trop tard, vous serez mis sur liste d'attente. Une
              équipe en liste d'attente est concidérée comme participant au tournoi libre, sauf si une
              place pour elle se libère dans le tournoi spotlight. Alors dépêchez vous ;)
            </p>
          )}

          <h3>Membres</h3>
          <TeamTable
            captain={this.props.user.team.captainId}
            players={this.props.user.team.users}
            spotlight={this.props.user.team.spotlight}
          />
          <h3>Demandes</h3>
          {!this.props.askingPlayers.length && (
            <p className="a-no-asking-players">Aucune demande en cours</p>
          )}
          <List>{this.props.askingPlayers.map(askingPlayer.bind(this.props))}</List>

          {/* Kick */}
          {this.props.isCaptain && this.props.kickablePlayers.length > 0 && <h3>Kick</h3>}
          {this.props.isCaptain && this.props.kickablePlayers.length > 0 && (
            <Form
              onSubmit={this.confirmKickPlayer}
              defaultValues={{
                player: this.props.kickablePlayers[0]
              }}
              render={({ submitForm }) => (
                <form onSubmit={submitForm} className="a-teammanagement__kick">
                  <Select
                    field="player"
                    placeholder="Joueur"
                    isClearable={false}
                    backspaceRemovesValue={false}
                    isSearchable={false}
                    options={this.props.kickablePlayers}
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
            {this.props.isCaptain && (
              <strong className="error">Quitter l'équipe en tant que capitaine la dissoudra</strong>
            )}
            <Button raised={true} onClick={this.confirmQuitTeam} theme="error">
              Quitter l'équipe
            </Button>
          </div>
        </div>
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => (
  state.user.user === null ? {user: state.user.user} : {
  user: state.user.user,
  teamStatus: teamStatus(state),
  spotlights: state.spotlights.spotlights,
  isCaptain: state.user.user.team.captainId === state.user.user.id,
  spotlightFull: (
    state.spotlights.spotlights.find(s => s.id === state.user.user.team.spotlightId) || {}
  ).isFull,
  // allow refuse and kick error
  askingPlayers: state.teams.teams.find(team => team.id === state.user.user.team.id)
    ? state.teams.teams.find(team => team.id === state.user.user.team.id).askingUsers
    : [],
  kickablePlayers: state.user.user.team.users
    .filter(user => user.id !== state.user.user.id)
    .map(user => ({ label: `${user.firstname} ${user.lastname} (${user.name})`, value: user.id }))
})

const mapDispatchToProps = dispatch => ({
  allowPlayer: player => dispatch(allowPlayer(player)),
  refusePlayer: player => dispatch(refusePlayer(player)),
  kickPlayer: ({ player }) => dispatch(kickPlayer(player.value)),
  selfKick: () => dispatch(kickPlayer('self'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamManagement)
