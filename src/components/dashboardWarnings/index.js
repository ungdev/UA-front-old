import './dashboardWarnings.css'
import React from 'react'
import Link from 'next/link'

export default class DashboardWarning extends React.Component {
  render() {
    if (this.props.user === null) return null

    const team = this.props.user.team

    // noinspection HtmlUnknownTarget
    return (
      <React.Fragment>
        {team != null && !this.props.user.paid ? (
          <div className="a-dashboard-warning">
            Tu n'as pas encore payé ta place !{' '}
            <Link href="dashboard/payment">
              <a>Clique ici</a>
            </Link>{' '}
            pour finaliser le paiement.
          </div>
        ) : null}

        {team != null && team.remainingPlaces !== '/' && !team.isInSpotlight ? (
          <div className="a-dashboard-warning">
            Il ne reste plus que {team.remainingPlaces}{' '}
            {team.remainingPlaces === 1 ? 'place disponible' : 'places disponibles'} pour le tournoi
            de {team.spotlight.name} et ton inscription n'est pas valide.&nbsp;
            <Link href="/dashboard/team">
              <a>Clique ici</a>
            </Link>{' '}
            pour en savoir plus
          </div>
        ) : null}
      </React.Fragment>
    )
  }
}
