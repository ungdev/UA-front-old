import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-form'

import Button from '../../../components/button'
import Select from '../../../components/select'
import selectStyles from '../../../components/select/styles'

import { joinSolo } from '../../../modules/spotlights'

// import './joinTeam.css'

// remove maxWidth
Object.assign(selectStyles, {
  menu: base => base,
  control: base => ({
    ...base,
    fontSize: '16px'
  })
})

class Solo extends React.Component {
  render() {
    return (
      <Form
        onSubmit={this.props.joinSolo}
        defaultValues={{
          spotlight: this.props.spotlights[0]
        }}
        render={({ submitForm }) => (
          <form onSubmit={submitForm} className="a-dashboard-page">
            <h2>Rejoindre un tournoi solo</h2>
            <p>
              Sélectionnez le tournoi solitaire pour le rejoindre.<br />
            </p>
            <Select
              field="spotlight"
              placeholder="Tournoi"
              options={this.props.spotlights}
              searchable={false}
              autoFocus
            />
            <Button type="submit" raised>
              Rejoindre ce tournoi
            </Button>
          </form>
        )}
      />
    )
  }
}

const mapStateToProps = state => ({
  spotlights: state.spotlights.spotlights
    .filter(spotlight => spotlight.perTeam === 1)
    .map(spotlight => ({
      label: spotlight.name,
      value: spotlight.id
    })),
})

const mapDispatchToProps = dispatch => ({
  joinSolo: ({ spotlight }) =>
    window.confirm(`Rejoindre le tournoi ${spotlight.label} ?`)
    && dispatch(joinSolo(spotlight.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Solo)
