import React from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Modal from '../../../../components/modal'
import Button from '../../../../components/button'

import './loginModal.css'

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
                onSubmit={values => console.log(values)}
                render={({ submitForm }) => (
                  <form onSubmit={submitForm} className="a-login-form">
                    <Text field="username" placeholder="Nom d'utilisateur" />
                    <Text field="password" placeholder="Mot de passe" />
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
                onSubmit={values => console.log(values)}
                render={({ submitForm }) => (
                  <form onSubmit={submitForm} className="a-register-form">
                    <Text field="username" placeholder="Nom d'utilisateur" />
                    <Text field="fullname" placeholder="Prénom Nom" />
                    <Text field="mail" type="email" placeholder="Mail" />
                    <Text field="password" type="password" placeholder="Mot de passe" />
                    <Text field="password2" type="password" placeholder="Confirmation" />
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
  canLogin: state.canLogin.canLogin
})

export default connect(mapStateToProps)(LoginModal)
