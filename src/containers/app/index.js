import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home'
import asyncComponent from '../../components/async'

const AsyncPizza = asyncComponent(() => import('../../components/pizza'))
const Dashboard = asyncComponent(() => import('../dashboard'))

const App = props => (
  <div>
    <AsyncPizza />
    <Switch>
      <Route path={process.env.REACT_APP_BASEURL} exact component={Home} />
      <Route path={process.env.REACT_APP_BASEURL + 'dashboard'} component={Dashboard} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
)

const mapStateToProps = state => ({
  // map location to rerender <App> when location changes
  location: state.routing.location.pathname,
  auth: state.user.user
})

export default connect(mapStateToProps)(App)
