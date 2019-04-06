import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../../../src/modules/user'

import './success.css'
import DashboardLayout from '../../../../src/layouts/dashboardLayout'

class PayementFail extends React.Component {
  constructor(props) {
    super(props)
    props.fetchUser()
  }

  render() {
    return (
      <DashboardLayout>
        <div className="errorframe">
          <h1>Paiement refusé :/</h1>
          <p>Vous n'avez pas été débité, veuillez réessayer.</p>
        </div>
      </DashboardLayout>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(
  null,
  mapDispatchToProps
)(PayementFail)
