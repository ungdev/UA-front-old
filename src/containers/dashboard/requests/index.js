import React from 'react'
import { connect } from 'react-redux'

import errorToString from '../../../lib/errorToString'

import { cancelRequest } from '../../../modules/team'

import './requests.css'

class Requests extends React.Component {
  constructor() {
    super()

    this.cancelRequest = this.cancelRequest.bind(this)
  }

  cancelRequest(id) {
    return e => {
      e.preventDefault()
      this.props.cancelRequest(id)
    }
  }

  render() {
    return (
      <div className="a-dashboard-page a-dashboard-requests">
        <h2>Mes demandes</h2>
        <div className="a-requests">
          {this.props.requests.length === 0 && <p>Aucune demande en cours.</p>}
          {this.props.cancelRequestError && (
            <strong className="error">{errorToString(this.props.cancelRequestError)}</strong>
          )}
          {this.props.requests.map((request, i) => (
            <div className="a-request" key={i}>
              <div className="a-request__content">
                <strong>{request.name}</strong>
                <em>{request.message}</em>
              </div>
              <span className="a-request__cancel" href="#" onClick={this.cancelRequest(request.id)}>
                Annuler
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  requests: state.user.teams
    .map(team => {
      const asking = team.askingUsers.find(askingUser => askingUser.id === state.user.user.id)

      if (!asking) {
        return null
      }

      return {
        id: team.id,
        name: team.name,
        message: asking.askingMessage
      }
    })
    .filter(request => !!request),
  cancelRequestError: state.team.cancelRequestError
})

const mapDispatchToProps = dispatch => ({
  cancelRequest: teamId => dispatch(cancelRequest(teamId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Requests)
