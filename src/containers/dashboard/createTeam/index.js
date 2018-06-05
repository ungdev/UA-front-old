import React from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'
import Select from 'react-select'

import Button from '../../../components/button'

import { createTeam } from '../../../modules/teams'

import './createTeam.css'

const CreateTeam = props => (
  <Form
    onSubmit={props.createTeam}
    render={({ submitForm }) => (
      <form onSubmit={submitForm} className="a-dashboard-page">
        <h2>Création d'équipe</h2>
        <p>
          Vous pouvez créer votre équipe ci-dessous.<br />
        </p>
        <Text
          field="name"
          placeholder="Nom de l'équipe"
          pattern="[A-zÀ-ÿ0-9 '#@!&\-$%]+"
          minLength="3"
          maxLength="90"
          autoFocus
        />
        <br />
        <Button type="submit" raised>
          Créer mon équipe
        </Button>
      </form>
    )}
  />
)

const mapDispatchToProps = dispatch => ({
  createTeam: newTeam => dispatch(createTeam(newTeam))
})

export default connect(
  null,
  mapDispatchToProps
)(CreateTeam)
