import React from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'

import Button from '../../../src/components/button'
import Select from '../../../src/components/select'
import selectStyles from '../../../src/components/select/styles'

import { joinTeam } from '../../../src/modules/teams'

import DashboardLayout from '../../../src/layouts/dashboardLayout'

// remove maxWidth
Object.assign(selectStyles, {
  menu: base => base,
  control: base => ({
    ...base,
    fontSize: '16px'
  })
})

class JoinTeam extends React.Component {
  render() {
    return (
      <DashboardLayout>
        <Form
          onSubmit={this.props.joinTeam}
          render={({ submitForm }) => (
            <form onSubmit={submitForm} className="a-dashboard-page">
              <h2>Rejoindre une équipe</h2>
              <p>
                Demandez à rejoindre une équipe ci-dessous.
                <br />
              </p>
              <Select
                field="team"
                placeholder="Nom de l'équipe"
                options={this.props.teams}
                autoFocus
                searchable
              />
              <Text
                field="message"
                placeholder="Votre message"
                minLength="3"
                maxLength="255"
                style={{ marginBottom: '15px' }}
              />
              <br />
              <Button type="submit" raised>
                Rejoindre cette équipe
              </Button>
            </form>
          )}
        />
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teams.teams
    ? state.teams.teams
        .filter(team => !team.soloTeam)
        .map(team => ({
          label: team.name,
          value: team.id
        }))
    : []
})

const mapDispatchToProps = dispatch => ({
  joinTeam: newUser => dispatch(joinTeam(newUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinTeam)
