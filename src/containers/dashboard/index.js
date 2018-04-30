import React from 'react'
import { Route } from 'react-router'
import { connect } from 'react-redux'

import Header from '../../components/header'
import DashboardHome from './home'
import DashboardEditInfos from './editInfos'
import DashboardPayment from './payment'
import DashboardRequests from './requests'

import { autoLogin } from '../../modules/login'

import './dashboard.css'

class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      render: false
    }
  }

  componentWillMount() {
    this.props.autoLogin()
      .then(() => {
        this.setState({
          render: (this.props.user && this.props.user.name)
        })
      })

    this.arrow = this.arrow.bind(this)
  }

  arrow() {
    return (this.props.location && this.props.location.indexOf('/dashboard') > -1)
      ? '/dashboard'
      : '/'
  }

  render() {
    return (
      <div>
        <Header arrow={this.arrow()} />
        <main className="a-dashboard">
          <h1>Dashboard</h1>

          {this.state.render && <Route path={process.env.REACT_APP_BASEURL + 'dashboard'} exact component={DashboardHome} />}
          {this.state.render && <Route path={process.env.REACT_APP_BASEURL + 'dashboard/user'} component={DashboardEditInfos} />}
          {this.state.render && <Route path={process.env.REACT_APP_BASEURL + 'dashboard/payment'} component={DashboardPayment} />}
          {this.state.render && <Route path={process.env.REACT_APP_BASEURL + 'dashboard/requests'} component={DashboardRequests} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
