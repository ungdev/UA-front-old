import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Notifs as Notifications } from 'redux-notifications'
import Home from '../home'
import asyncComponent from '../../components/async'

const AsyncInformations = asyncComponent(() => import('../informations'))
const AsyncPartners = asyncComponent(() => import('../partners'))
const AsyncTournaments = asyncComponent(() => import('../tournaments'))
const AsyncPizza = asyncComponent(() => import('../../components/pizza'))
const Dashboard = asyncComponent(() => import('../dashboard'))
const Reset = asyncComponent(() => import('../reset'))
const Validate = asyncComponent(() => import('../validate'))

const App = props => (
  <div>
    <AsyncPizza />
    <Notifications />
    <Switch>
      <Route path={process.env.REACT_APP_BASEURL} exact component={Home} />
      <Route path={process.env.REACT_APP_BASEURL + 'informations'} exact component={AsyncInformations} />
      <Route path={process.env.REACT_APP_BASEURL + 'partners'} exact component={AsyncPartners} />
      <Route path={process.env.REACT_APP_BASEURL + 'tournaments'} component={AsyncTournaments} />
      <Route path={process.env.REACT_APP_BASEURL + 'dashboard'} component={Dashboard} />
      <Route path={process.env.REACT_APP_BASEURL + 'reset/:token'} component={Reset} />
      <Route path={process.env.REACT_APP_BASEURL + 'valid/:token'} component={Validate} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
)

const mapStateToProps = state => ({
  auth: state.user.user
})

export default connect(mapStateToProps)(App)
