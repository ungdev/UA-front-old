import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'


const App = () => (
  <div>
    <Route exact path={process.env.REACT_APP_BASEURL + '/'} component={Home} />
  </div>
)

export default App
