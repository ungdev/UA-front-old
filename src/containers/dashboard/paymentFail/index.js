import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../../modules/user'

import './paymentFail.css'

class PayementFail extends React.Component {

  constructor(props){
    super(props)
    props.fetchUser()
  }
  render() {
    return (<div className="errorframe">
      <h1>Paiement refusé :/</h1>
      <p>Vous n'avez pas été débité, veuillez réessayer.</p>
    </div>)
  }
}


const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(
  null,
  mapDispatchToProps
)(PayementFail)
