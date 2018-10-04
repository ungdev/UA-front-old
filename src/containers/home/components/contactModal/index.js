import React from 'react'
import { connect } from 'react-redux'
import { Form, Text, TextArea } from 'react-form'

import './contactModal.css'

import Modal from '../../../../components/modal'
import Button from '../../../../components/button'
import Select from '../../../../components/select'

import { sendMessage } from '../../../../modules/message'

class ContactModal extends React.Component {
  constructor() {
    super()
    this.submit = this.submit.bind(this)
  }

  submit(user) {
    this.props.sendMessage(user)
    this.props.onClose()
  }

  render() {
    const typeOptions = [
      { label: 'Je n\'arrive pas à me connecter', value: '1' },
      { label: 'J\'ai une question sur le tournoi LoL (Pro)', value: '2' },
      { label: 'J\'ai une question sur le tournoi LoL (Amateur)', value: '3' },
      { label: 'J\'ai une question sur le tournoi Fortnite', value: '4' },
      { label: 'J\'ai une question sur le tournoi Hearthstone', value: '5' },
      { label: 'J\'ai une question sur le tournoi CS:GO', value: '6' },
      { label: 'J\'ai une question sur le tournoi SSBU', value: '7' },
      { label: 'Je rencontre un problème pour payer', value: '8' },
      { label: 'J\'ai eu une erreur sur le site', value: '9' },
      { label: 'Signaler un bug', value: '10' },
      { label: 'Autre', value: 'other' }]
    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
          <div className="a-contact-modal">
              <Form
                onSubmit={this.submit}
                render={({ submitForm }) => (
                  <React.Fragment>
                    <div><h1>Formulaire</h1></div>
                    <form onSubmit={submitForm} className="a-contact-form">
                      <Text
                        field="firstname"
                        type="text"
                        placeholder="Prénom"
                        pattern="[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěíňóřšťúůýž]+"
                        minLength="2"
                        maxLength="200"
                        autoFocus
                        value=""
                      />
                      <Text
                        field="lastname"
                        type="text"
                        placeholder="Nom"
                        pattern="[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěíňóřšťúůýž]+"
                        minLength="2"
                        maxLength="200"
                      />
                      <Select
                        className="contact-select"
                        field="topic"
                        isClearable={false}
                        backspaceRemovesValue={false}
                        searchable={true}
                        options={typeOptions}
                        style={{ maxWidth: '400px' }}
                      />
                      <Text field="email" type="email" placeholder="Mail" />
                      <Text field="phone" type="tel" placeholder="Téléphone" />
                      <TextArea field="message" style={{ height: '200px' }} placeholder="Votre message ici ... Pensez à décrire très précisément votre problème, nous vous répondrons par mail." />
                      <br />
                      <Button type="submit" raised>
                        Envoyer
                      </Button>
                    </form>
                  </React.Fragment>
                )}
              />
          </div>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  sendMessage: (user) => dispatch(sendMessage(user))
})

export default connect(
  null,
  mapDispatchToProps
)(ContactModal)
