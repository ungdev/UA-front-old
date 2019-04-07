import React from 'react'
import Router from 'next/router'

import { connect } from 'react-redux'

import DashboardHeader from '../../../src/components/dashboardHeader'
import { fetchTeams } from '../../modules/teams'
import { autoLogin } from '../../modules/login'

import './dashboardLayout.css'

class DashboardLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      render: false
    }
  }

  componentDidMount() {
    this.location = Router.asPath

    this.props.autoLogin().then(() => {
      this.setState({
        render: this.props.user && this.props.user.name
      })
      this.props.fetchTeams()
    })

    this.arrow = this.arrow.bind(this)
  }

  arrow() {
    return this.location &&
      this.location.indexOf('/dashboard') > -1 &&
      this.location !== '/dashboard'
      ? '/dashboard'
      : '/'
  }

  render() {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(this.state.render)
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    return (
      <div>
        <DashboardHeader arrow={this.arrow()} />
        <main className="a-dashboard">
          <h1>
            Dashboard {this.props.user && this.props.user.name && `de ${this.props.user.name}`}
            {this.props.user && this.props.user.team && !this.props.user.plusone
              ? ` (joueur ${this.props.user.team.spotlight.shortName})`
              : this.props.user && this.props.user.plusone
              ? ' (Visiteur)'
              : ' (joueur libre)'}
          </h1>
          {this.state.render ? this.props.children : ''}
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  autoLogin: () => dispatch(autoLogin()),
  fetchTeams: () => dispatch(fetchTeams())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardLayout)
