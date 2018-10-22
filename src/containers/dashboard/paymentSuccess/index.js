import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fetchUser } from '../../../modules/user'

import './payment.css'

class PayementSuccess extends React.Component {

  constructor(props){
    super(props)
    props.fetchUser()
  }
  render() {
    if(this.props.user && !this.props.user.paid) this.props.redirect()
    return (<div className="successframe">
      <h1>Paiement validé !</h1>
      <p>Vous devriez recevoir sous peu confirmant le paiement.</p>
    </div>)
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(push('/dashboard/payment')),
  fetchUser: () => dispatch(fetchUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayementSuccess)
