import React from 'react'
import { connect } from 'react-redux'
import { Form, Text } from 'react-form'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { actions as notifActions } from 'redux-notifications'

import './loginModal.css'

import Modal from '../../../components/modal'
import Button from '../../../components/button'

import { register } from '../../../modules/register'
import { tryLogin } from '../../../modules/login'
import { fetchUser } from '../../../modules/user'
import Select from '../../../components/select'

class LoginModal extends React.Component {
  constructor() {
    super()

    this.state = {
      tabIndex: 0,
      loading: false,
      accepted: false,
    }

    this.setTabIndex = this.setTabIndex.bind(this)
    this.submit = this.submit.bind(this)
  }


  setTabIndex(tabIndex) {
    this.setState({
      tabIndex
    })
  }

  submit(user) {
    if(!this.state.accepted) return this.props.noAcceptation() 
    if(user.password !== user.password2) return this.props.passwordMismatch()
    if(!user.gender) user.gender = 'N/A'
    else user.gender = user.gender.value
    this.setState({
      loading: true
    })

    this.props.register(user)
      .then(() => this.setState({ loading: false, tabIndex: 0 }))
  }

  render() {
    const genderOptions = [{ label: 'Homme', value: 'M' }, { label: 'Femme', value: 'F' }]
    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
        {this.props.canLogin && (
          <div className="a-login-modal">
            <Tabs selectedIndex={this.state.tabIndex} onSelect={this.setTabIndex}>
              <TabList>
                <Tab>Connexion</Tab>
                <Tab>Inscription</Tab>
              </TabList>

              <TabPanel>
                <Form
                  onSubmit={this.props.login}
                  render={({ submitForm }) => (
                    <form onSubmit={submitForm} className="a-login-form">
                      <Text field="name" placeholder="Nom d'utilisateur" autoFocus />
                      <Text field="password" type="password" placeholder="Mot de passe" />
                      <span className="forgot" onClick={this.props.onForgot}>
                        Mot de passe oublié ?
                      </span>
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
                  onSubmit={this.submit}
                  render={({ submitForm }) => (
                    <form onSubmit={submitForm} className="a-register-form">
                      <Text
                        field="name"
                        type="text"
                        placeholder="Nom d'utilisateur"
                        pattern="[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěêçëùíňóřšťúůýž-]+"
                        minLength="3"
                        maxLength="90"
                        autoFocus
                      />
                      <p style={{ marginTop: 0, marginBottom: 0, color: '#888888', fontSize: '0.9em' }}>Pour LoL le nom d'utilisateur doit être le nom d'invocateur</p>
                      <Select
                        field="gender"
                        isClearable={false}
                        backspaceRemovesValue={false}
                        searchable={false}
                        options={genderOptions}
                        placeholder="Sélectionner..."
                      />
                      <Text
                        field="firstname"
                        type="text"
                        placeholder="Prénom"
                        pattern="[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěêçëùěíňóřšťúůýž-]+"
                        minLength="2"
                        maxLength="200"
                      />
                      <Text
                        field="lastname"
                        type="text"
                        placeholder="Nom"
                        pattern="[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěěêçëùíňóřšťúůýž-]+"
                        minLength="2"
                        maxLength="200"
                      />
                      <Text field="email" type="email" placeholder="E-mail" />
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
                      <div>
                        <input
                          name="accept"
                          type="checkbox"
                          checked={this.state.accepted}
                          onChange={() => this.setState({ accepted: !this.state.accepted })}
                          style={{ marginBottom: '0px' }}
                        />
                        <span style={{ fontSize: '10px' }}>Je certifie bozbfzbf <a href='/mentions-legales'>conditions d'utilisations</a> du site</span>
                      </div>
                      {this.state.loading && <div style={{ margin: '12px 0 0 0' }}>Envoi en cours...</div>}
                      <br />
                      <Button type="submit" raised>
                        Inscription
                      </Button>
                    </form>
                  )}
                />
              </TabPanel>
            </Tabs>
          </div>
        )}
        {!this.props.canLogin && (
          <div className="a-cantlogin-modal">Connexion désactivée pour le moment.</div>
        )}
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  canLogin: state.canLogin.canLogin
})

const mapDispatchToProps = dispatch => ({
  login: user => {
    dispatch(tryLogin(user)).then(() => {
      dispatch(fetchUser())
    })
  },
  register: user => dispatch(register(user)),
  passwordMismatch: () => dispatch(
    notifActions.notifSend({
      message: 'Les mots de passe ne correspondent pas',
      kind: 'danger',
      dismissAfter: 2000
    })
  ),
  noAcceptation: () => dispatch(
    notifActions.notifSend({
      message: 'Vous devez accepter les conditions d\'utilisation',
      kind: 'danger',
      dismissAfter: 2000
    })
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal)
