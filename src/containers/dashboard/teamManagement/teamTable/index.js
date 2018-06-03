import React from 'react'

import './teamTable.css'

const teamTableRow = (player, i, captain) => (
  <div className="a-team-table__body__row" key={i}>
    <div className="a-team-table__body__row__cell">{player.name} {(player.id === captain) ? '👑' : ''}</div>
    {player.paid && (
      <div className="a-team-table__body__row__cell a-team-table__payment">
        <span className="a-team-table__payment--yes" />
      </div>
    )}
    {!player.paid && (
      <div className="a-team-table__body__row__cell a-team-table__payment">
        <span className="a-team-table__payment--no" /> Non payé
      </div>
    )}
  </div>
)

const TeamTable = props => {
  const playerCount = props.players.length
  const playerPaidCount = props.players.filter(player => player.paid).length

  return (
    <div className="a-team-table">
      <div className="a-team-table__header">
        <div className="a-team-table__header__row">
          <div className="a-team-table__header__row__cell">Nom du joueur</div>
          <div className="a-team-table__header__row__cell">Paiement</div>
        </div>
      </div>
      <div className="a-team-table__body">{props.players.map((player, i) => teamTableRow(player, i, props.captain))}</div>
      <div className="a-team-table__footer">
        <div>Joueurs : {playerCount}</div>
        <div>Places payées : {playerPaidCount}</div>
      </div>
    </div>
  )
}

export default TeamTable
