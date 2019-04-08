import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-form'

import Button from '../../../src/components/button'
import Select from '../../../src/components/select'
import selectStyles from '../../../src/components/select/styles'

import { joinSolo } from '../../../src/modules/spotlights'
import DashboardLayout from '../../../src/layouts/dashboardLayout'

import ConfirmModal from '../../../src/components/confirmModal'

// remove maxWidth
Object.assign(selectStyles, {
  menu: base => base,
  control: base => ({
    ...base,
    fontSize: '16px'
  })
})

class Solo extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      confirmOpen: false,
      confirmMessage: null,
      onConfirm: null
    }
  }

  openConfirm = ({ spotlight }) => {
    this.setState({
      confirmOpen: true,
      confirmMessage: `Êtes-vous sûr de rejoindre le tournoi ${spotlight.label} ?`,
      onConfirm: () => this.props.joinSolo(spotlight)
    })
  }

  closeConfirm = () => {
    this.setState({
      confirmOpen: false
    })
  }

  render() {
    return (
      <DashboardLayout>
        <ConfirmModal isOpen={this.state.confirmOpen} message={this.state.confirmMessage} onClose={this.closeConfirm} onConfirm={this.state.onConfirm}/>
        <Form
          onSubmit={this.openConfirm}
          defaultValues={{
            spotlight: this.props.spotlights[0]
          }}
          render={({ submitForm }) => (
            <form onSubmit={submitForm} className="a-dashboard-page">
              <h2>Rejoindre un tournoi solo</h2>
              <p>
                Sélectionnez le tournoi solitaire pour le rejoindre.
                <br />
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
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => ({
  spotlights: state.spotlights.spotlights
    .filter(spotlight => spotlight.perTeam === 1)
    .map(spotlight => ({
      label: spotlight.name,
      value: spotlight.id
    }))
})

const mapDispatchToProps = dispatch => ({
  joinSolo: (spotlight) => dispatch(joinSolo(spotlight.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Solo)
