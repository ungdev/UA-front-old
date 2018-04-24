import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home'
import asyncComponent from '../../components/async'

const AsyncPizza = asyncComponent(() => import('../../components/pizza'))
const Dashboard = asyncComponent(() => import('../dashboard'))

const App = () => (
  <div>
    <AsyncPizza />
    <Switch>
      <Route path={process.env.REACT_APP_BASEURL} exact component={Home} />
      <Route path={process.env.REACT_APP_BASEURL + 'dashboard'} component={Dashboard} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
)

export default App
