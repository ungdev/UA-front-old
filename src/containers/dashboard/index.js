import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'

import Header from '../../components/header'
import DashboardHome from './home'
import DashboardEditInfos from './editInfos'
import DashboardPayment from './payment'
import DashboardRequests from './requests'
import DashboardCreateTeam from './createTeam'
import DashboardTeam from './teamManagement'
import DashboardJoinTeam from './joinTeam'
import DashboardViewParticipants from './viewParticipants'

import { autoLogin } from '../../modules/login'

import './dashboard.css'

const baseUrl = process.env.REACT_APP_BASEURL

class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      render: false
    }
  }

  componentWillMount() {
    this.props.autoLogin().then(() => {
      this.setState({
        render: this.props.user && this.props.user.name
      })
    })

    this.arrow = this.arrow.bind(this)
  }

  arrow() {
    return this.props.location &&
      this.props.location.indexOf('/dashboard') > -1 &&
      this.props.location !== '/dashboard'
      ? '/dashboard'
      : '/'
  }

  render() {
    return (
      <div>
        <Header arrow={this.arrow()} />
        <main className="a-dashboard">
          <h1>
            Dashboard {this.props.user && this.props.user.name && `(${this.props.user.name})`}
          </h1>

          {this.state.render && (
            <Route
              path={baseUrl + 'dashboard'}
              exact
              component={DashboardHome}
            />
          )}
          {this.state.render && (
            <Route
              path={baseUrl + 'dashboard/user'}
              component={DashboardEditInfos}
            />
          )}
          {this.state.render && (
            <Route
              path={baseUrl + 'dashboard/payment'}
              component={DashboardPayment}
            />
          )}
          {this.state.render && (
            <Route
              path={process.env.REACT_APP_BASEURL + 'dashboard/participants'}
              component={DashboardViewParticipants}
            />
          )}

          {/* routes without team */}

          {this.state.render && (
            <Route path={baseUrl + 'dashboard/createTeam'} render={() => (
              !this.props.user.team
                ? <DashboardCreateTeam />
                : <Redirect to={baseUrl + 'dashboard'} />
            )} />
          )}
          {this.state.render && (
            <Route path={baseUrl + 'dashboard/joinTeam'} render={() => (
              !this.props.user.team
                ? <DashboardJoinTeam />
                : <Redirect to={baseUrl + 'dashboard'} />
            )} />
          )}
          {this.state.render && (
            <Route path={baseUrl + 'dashboard/requests'} render={() => (
              !this.props.user.team
                ? <DashboardRequests />
                : <Redirect to={baseUrl + 'dashboard'} />
            )} />
          )}

          {/* routes with team */}

          {this.state.render && (
            <Route path={baseUrl + 'dashboard/team'} render={() => (
              this.props.user.team
                ? <DashboardTeam/>
                : <Redirect to={baseUrl + 'dashboard'} />
            )}/>
          )}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  location: state.routing.location.pathname,
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  autoLogin: () => dispatch(autoLogin())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
