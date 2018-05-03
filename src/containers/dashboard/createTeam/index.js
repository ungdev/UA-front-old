import React from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'
import Select from 'react-select'

import Button from '../../../components/button'
import errorToString from '../../../lib/errorToString'

import { createTeam } from '../../../modules/team'

import './createTeam.css'

const CreateTeam = props => (
  <Form
    onSubmit={props.createTeam}
    render={({ submitForm }) => (
      <form onSubmit={submitForm} className="a-dashboard-page a-dashboard-edit">
        <h2>Création d'équipe</h2>
        <p>
          Vous pouvez créer votre équipe ci-dessous.<br/>
        </p>
        <Text
          field="name"
          placeholder="Nom de l'équipe"
          pattern="[A-zÀ-ÿ0-9 '#@!&\-$%]+"
          minLength="3"
          maxLength="90"
          autoFocus
        />
        {props.createTeamError && (
          <strong className="error">{errorToString(props.createTeamError)}</strong>
        )}
        <br />
        <Button type="submit" raised>
          Créer mon équipe
        </Button>
      </form>
    )}
  />
)

const mapStateToProps = state => ({
  createTeamError: state.team.createTeamError
})

const mapDispatchToProps = dispatch => ({
  createTeam: newUser => dispatch(createTeam(newUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam)
