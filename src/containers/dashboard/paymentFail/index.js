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
    if(this.props.user && this.props.user.paid) this.props.redirect()
    return (<div className="errorframe">
      <h1>Paiement refusé :/</h1>
      <p>Veuillez réessauer.</p>
    </div>)
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(push('/dashboard/payment/success')),
  fetchUser: () => dispatch(fetchUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayementFail)
