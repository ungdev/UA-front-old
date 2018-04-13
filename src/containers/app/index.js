import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import asyncComponent from '../../components/async'

const AsyncPizza = asyncComponent(() => import('../../components/pizza'));

const App = () => (
  <div>
    <AsyncPizza />
    <Route exact path={process.env.REACT_APP_BASEURL + '/'} component={Home} />
  </div>
)

export default App
