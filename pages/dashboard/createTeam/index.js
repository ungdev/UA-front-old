import React from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'
import Select from '../../../src/components/select'

import Button from '../../../src/components/button'

import { createTeam } from '../../../src/modules/teams'

import withDashboardLayout from '../../../src/layouts/dashboardLayout'

const CreateTeam = props => (
  <Form
    onSubmit={props.createTeam}
    render={({ submitForm }) => (
      <form onSubmit={submitForm} className="a-dashboard-page">
        <h2>Création d'équipe</h2>
        <p>
          Vous pouvez créer votre équipe ci-dessous.
          <br />
        </p>
        <Text
          field="name"
          placeholder="Nom de l'équipe"
          pattern="[A-zÀ-ÿ0-9 '#@!&\-$%]+"
          minLength="3"
          maxLength="90"
          autoFocus
        />
        <Select
          field="spotlight"
          placeholder="Tournoi"
          searchable={false}
          options={props.spotlights}
        />
        <br />
        <Button type="submit" raised>
          Créer mon équipe
        </Button>
      </form>
    )}
  />
)

const mapStateToProps = state => ({
  spotlights: state.spotlights.spotlights
    .filter(spotlight => spotlight.perTeam > 1)
    .map(spotlight => ({
      label: spotlight.isFull ? `${spotlight.name} (tournoi plein)` : spotlight.name,
      value: spotlight.id,
      isDisabled: spotlight.isFull
    }))
})

const mapDispatchToProps = dispatch => ({
  createTeam: newTeam => dispatch(createTeam(newTeam))
})

export default withDashboardLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateTeam)
)
