import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import './validate.css'

import Header from '../../components/header'
import errorToString from '../../lib/errorToString'

import { validate } from '../../modules/register'

let hasCalledValidate = false

const Validate = props => {
  if (!hasCalledValidate) {
    hasCalledValidate = true
    props.validate(props.match.params.token)
  }

  return (
    <div>
      <Header arrow="/" />
      <div className="a-validate">
        Validation en cours
        {props.validateSuccess && <strong className="success">Compte validé</strong>}
        {props.validateError && (
          <strong className="error">{errorToString(props.validateError)}</strong>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  validateSuccess: state.register.validateSuccess,
  validateError: state.register.validateErrorMessage
})

const mapDispatchToProps = dispatch => ({
  validate: token => {
    return dispatch(validate(token))
      .then(() => {
        setTimeout(() => {
          dispatch(push('/dashboard'))
        }, 1000)
      })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Validate)
