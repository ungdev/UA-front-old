import React from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import './loginModal.css'

import Modal from '../../../../components/modal'
import Button from '../../../../components/button'
import errorToString from '../../../../lib/errorToString'

import { register } from '../../../../modules/register'
import { tryLogin } from '../../../../modules/login'

const LoginModal = props => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      {props.canLogin && (
        <div className="a-login-modal">
          <Tabs>
            <TabList>
              <Tab>Connexion</Tab>
              <Tab>Inscription</Tab>
            </TabList>

            <TabPanel>
              <Form
                onSubmit={props.login}
                render={({ submitForm }) => (
                  <form onSubmit={submitForm} className="a-login-form">
                    <Text field="name" placeholder="Nom d'utilisateur" />
                    <Text field="password" type="password" placeholder="Mot de passe" />
                    {props.loginError && (
                      <strong className="error">{errorToString(props.loginError)}</strong>
                    )}
                    <br />
                    <Button type="submit" raised>
                      Connexion
                    </Button>
                  </form>
                )}
              />
            </TabPanel>
            <TabPanel>
              <Form
                onSubmit={props.register}
                render={({ submitForm }) => (
                  <form onSubmit={submitForm} className="a-register-form">
                    <Text
                      field="name"
                      placeholder="Nom d'utilisateur"
                      pattern="[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěíňóřšťúůýž]+"
                      minLength="3"
                      maxLength="90"
                    />
                    <Text
                      field="fullname"
                      placeholder="Prénom Nom"
                      pattern="[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěíňóřšťúůýž \-]+"
                      minLength="3"
                      maxLength="200"
                    />
                    <Text field="email" type="email" placeholder="Mail" />
                    <Text
                      field="password"
                      type="password"
                      placeholder="Mot de passe"
                      minLength="6"
                    />
                    <Text
                      field="password2"
                      type="password"
                      placeholder="Confirmation"
                      minLength="6"
                    />
                    {props.registerError && (
                      <strong className="error">{errorToString(props.registerError)}</strong>
                    )}
                    <br />
                    <Button type="submit" raised>
                      Connexion
                    </Button>
                  </form>
                )}
              />
            </TabPanel>
          </Tabs>
        </div>
      )}
      {!props.canLogin && (
        <div className="a-cantlogin-modal">Connection désactivée pour le moment.</div>
      )}
    </Modal>
  )
}

const mapStateToProps = state => ({
  canLogin: state.canLogin.canLogin,
  loginError: state.login.errorMessage,
  registerError: state.register.errorMessage
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(tryLogin(user)),
  register: user => dispatch(register(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
