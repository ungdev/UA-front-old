import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
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

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayementFail)
