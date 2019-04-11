import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Notifs as Notifications } from 'redux-notifications'
import Home from '../home'
import asyncComponent from '../../components/async'
import { Helmet } from "react-helmet";


const AsyncInformations = asyncComponent(() => import('../informations'))
const AsyncFAQ = asyncComponent(() => import('../faq'))
const AsyncMentionsLegales = asyncComponent(() => import('../mentions-legales'))
const AsyncPartners = asyncComponent(() => import('../partners'))
const AsyncTournaments = asyncComponent(() => import('../tournaments'))
const AsyncGallery = asyncComponent(() => import('../gallery'))
const AsyncPizza = asyncComponent(() => import('../../components/pizza'))
const AsyncDashboard = asyncComponent(() => import('../dashboard'))
const Reset = asyncComponent(() => import('../reset'))
const Validate = asyncComponent(() => import('../validate'))

const App = props => (
  <div>
    <Helmet>
      <title>{process.env.REACT_APP_WEBSITE_NAME}</title>
      <meta name="description" content={process.env.REACT_APP_WEBSITE_DESCRIPTION}/>
      <meta property="og:url" content={props.metadatas.url} />
      <link rel="canonical" href={props.metadatas.url} />
    </Helmet>
    <AsyncPizza />
    <Notifications />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/informations" exact component={AsyncInformations} />
      <Route path="/faq" exact component={AsyncFAQ} />
      <Route path="/mentions-legales" exact component={AsyncMentionsLegales} />
      <Route path="/partners" exact component={AsyncPartners} />
      <Route path="/tournaments" component={AsyncTournaments} />
      <Route path="/gallery" component={AsyncGallery} />
      <Route path="/dashboard" component={AsyncDashboard} />
      <Route path="/reset/:token" component={Reset} />
      <Route path="/valid/:token" component={Validate} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
)

const mapStateToProps = state => ({
  auth: state.user.user,
  metadatas: state.metadatas.metadatas
})

export default connect(mapStateToProps)(App)
