import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-form'

import Select from '../../../components/select'

class Participants extends React.Component {
  constructor() {
    super()

    this.state = {
      spotlight: 'Hearthstone'
    }

    this.changeSpotlight = this.changeSpotlight.bind(this)
  }

  changeSpotlight(spotlight) {
    this.setState({
      spotlight: spotlight.value
    })
  }

  render() {
    const teams = this.props.teams.filter(team => team.spotlightId === this.state.spotlight)

    const options = this.props.spotlights.map(spotlight => ({
      label: spotlight.name,
      value: spotlight.id
    }))

    return (
      <div className="a-participants a-dashboard-page">
        <h2>Participants</h2>
        <Form
          defaultValues={{
            spotliht: options[0]
          }}
          render={({ submitForm }) => (
            <form onSubmit={submitForm}>
              <Select
                field="spotliht"
                onChange={this.changeSpotlight}
                options={options}
                searchable={false}
              />
              {teams.length > 0 && (
                <div>
                  <strong>Liste des équipes :</strong>
                  <br />
                  {teams.map((team, i) => <span key={i}>{team.name}</span>)}
                </div>
              )}
              {teams.length === 0 && <div>Aucune équipe dans ce tournoi pour le moment</div>}
            </form>
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spotlights: state.spotlights.spotlights,
  teams: state.teams.teams,
  user: state.user.user
})

export default connect(mapStateToProps)(Participants)
