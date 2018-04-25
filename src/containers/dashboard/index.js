import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'

import Header from '../../components/header'
import DashboardHome from './home'
import DashboardEditInfos from './editInfos'

import { autoLogin } from '../../modules/login'

import './dashboard.css'

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.autoLogin()

    this.arrow = this.arrow.bind(this)
  }

  arrow() {
    switch (this.props.location) {
      case '/dashboard/user':
        return '/dashboard'
      default:
        return '/'
    }
  }

  render() {
    return (
      <div>
        <Header arrow={this.arrow()} />
        <main className="a-dashboard">
          <h1>Dashboard</h1>

          <Route path={process.env.REACT_APP_BASEURL + 'dashboard'} exact component={DashboardHome} />
          <Route path={process.env.REACT_APP_BASEURL + 'dashboard/user'} component={DashboardEditInfos} />
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // map location to rerender <Dashboard> when location changes
  location: state.routing.location.pathname,
})

const mapDispatchToProps = dispatch => ({
  autoLogin: () => dispatch(autoLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
