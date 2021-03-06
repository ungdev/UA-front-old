import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import { connect } from 'react-redux'

import Header from '../../components/header'
import DashboardHome from './home'
import DashboardEditInfos from './editInfos'
import DashboardPayment from './payment'
import DashboardShop from './shop'
import DashboardItems from './items'
import DashboardPaymentSuccess from './paymentSuccess'
import DashboardPaymentError from './paymentFail'
import DashboardRequests from './requests'
import DashboardCreateTeam from './createTeam'
import DashboardTeam from './teamManagement'
import DashboardJoinTeam from './joinTeam'
import DashboardViewParticipants from './viewParticipants'
import DashboardSolo from './solo'
import DashboardLoading from './loading'

import { autoLogin } from '../../modules/login'
import { fetchTeams } from '../../modules/teams'

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
      this.props.fetchTeams()
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
            Dashboard {this.props.user && this.props.user.name && `de ${this.props.user.name}`}
            {this.props.user && this.props.user.team && !this.props.user.plusone ? ` (joueur ${this.props.user.team.spotlight.shortName})` : 
            (this.props.user && this.props.user.plusone ? ' (Visiteur)' : ' (joueur libre)')}
          </h1>
          <Switch>
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
              exact
              path={baseUrl + 'dashboard/payment/success'}
              component={DashboardPaymentSuccess}
            />
          )}
          {this.state.render && (
            <Route
              exact
              path={baseUrl + 'dashboard/payment/error'}
              component={DashboardPaymentError}
            />
          )}
          {this.state.render && !this.props.user.paid && (
            <Route
              exact
              path={baseUrl + 'dashboard/payment'}
              component={DashboardPayment}
            />
          )}
          {this.state.render && this.props.user.paid && (
            <Route
              exact
              path={baseUrl + 'dashboard/shop'}
              component={DashboardShop}
            />
          )}
          {this.state.render && this.props.user.paid && (
            <Route
              exact
              path={baseUrl + 'dashboard/items'}
              component={DashboardItems}
            />
          )}
          {this.state.render && (
            <Route
              path={baseUrl + 'dashboard/participants'}
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
          {this.state.render && (
            <Route path={baseUrl + 'dashboard/solo'} render={() => (
              !this.props.user.team
                ? <DashboardSolo />
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
          {this.state.render && <Redirect from="*" to="/dashboard" />}
          {!this.state.render && <DashboardLoading />}
          </Switch>
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
  autoLogin: () => dispatch(autoLogin()),
  fetchTeams: () => dispatch(fetchTeams()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
