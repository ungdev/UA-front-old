import React from 'react'
import { Form, Text } from 'react-form'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import './reset.css'

import Button from '../../components/button'
import Header from '../../components/header'
import errorToString from '../../lib/errorToString'

import { resetPassword } from '../../modules/forgot'

class Reset extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header arrow="/" />
        <Form
          defaultValues={{
            token: this.props.match.params.token
          }}
          onSubmit={this.props.resetPassword}
          render={({ submitForm }) => (
            <form onSubmit={submitForm} className="a-reset">
              <h2>Changer mon mot de passe</h2>
              <Text field="password" type="password" placeholder="Mot de passe" minLength="6" />
              <Text field="password2" type="password" placeholder="Confirmation" minLength="6" />
              {this.props.resetSuccess && (
                <strong className="success">Modifications validées</strong>
              )}
              {this.props.resetError && (
                <strong className="error">{errorToString(this.props.resetError)}</strong>
              )}
              <br />
              <Button type="submit" raised>
                Changer mon mot de passe
              </Button>
            </form>
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  resetSuccess: state.forgot.success,
  resetError: state.forgot.error
})

const mapDispatchToProps = dispatch => ({
  resetPassword: user =>
    dispatch(resetPassword(user)).then(() => {
      setTimeout(() => {
        dispatch(push('/'))
      }, 2000)
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Reset)
