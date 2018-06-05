import React from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'

import Button from '../../../components/button'
import Select from '../../../components/select'
import selectStyles from '../../../components/select/styles'

import { joinTeam } from '../../../modules/teams'

import './joinTeam.css'

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
      <Form
        onSubmit={this.props.joinTeam}
        render={({ submitForm }) => (
          <form onSubmit={submitForm} className="a-dashboard-page">
            <h2>Rejoindre une équipe</h2>
            <p>
              Demandez à rejoindre une équipe ci-dessous.<br />
            </p>
            <Select
              field="team"
              placeholder="Nom de l'équipe"
              options={this.props.teams}
              autoFocus
            />
            <Text field="message" placeholder="Votre message" minLength="3" maxLength="255" />
            <br />
            <Button type="submit" raised>
              Rejoindre cette équipe
            </Button>
          </form>
        )}
      />
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teams.teams.map(team => ({ label: team.name, value: team.id }))
})

const mapDispatchToProps = dispatch => ({
  joinTeam: newUser => dispatch(joinTeam(newUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(JoinTeam)
