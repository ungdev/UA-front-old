import React from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'

import './forgotModal.css'

import Modal from '../../../../components/modal'
import Button from '../../../../components/button'

import { sendResetMail } from '../../../../modules/forgot'

const ForgotModal = props => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div className="a-forgot-modal">
      <Form
        onSubmit={props.sendMail}
        render={({ submitForm }) => (
          <form onSubmit={submitForm} className="a-forgot-form">
            <h3>Oubli de mot de passe</h3>
            <p>
              Vous avez oublié votre mot de passe ? Entrez votre mail. Vous recevrez un lien pour
              changer votre mot de passe.
            </p>
            <Text field="email" placeholder="E-mail" autoFocus />
            <br />
            <Button type="submit" raised>
              Envoyer le code
            </Button>
          </form>
        )}
      />
    </div>
  </Modal>
)

const mapDispatchToProps = dispatch => ({
  sendMail: user => {
    dispatch(sendResetMail(user))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(ForgotModal)
