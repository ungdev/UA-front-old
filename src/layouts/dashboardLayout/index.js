import React from 'react'

import { connect } from 'react-redux'

import DashboardHeader from '../../../src/components/dashboardHeader'
import { fetchTeams } from '../../modules/teams'
import { autoLogin } from '../../modules/login'

import './dashboardLayout.css'
import Loading from '../../components/loading'

export default Component => {
  class DashboardLayout extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        render: false
      }
    }

    componentWillMount() {
      if (process.browser) {
        if (this.props.user === null) {
          this.props.autoLogin().then(() => {
            if(this.props.user) {
              this.props.fetchTeams().then(() => {
                this.setState({ render: true })
              })
            }
          })
        } else this.setState({ render: true })
      }
    }

    render() {
      return (
        <div>
          <DashboardHeader />
          <main className="a-dashboard">
            <h1>
              Dashboard {this.props.user && this.props.user.name && `de ${this.props.user.name}`}
              {this.props.user && this.props.user.team && !this.props.user.plusone
                ? ` (joueur ${this.props.user.team.spotlight.shortName})`
                : this.props.user && this.props.user.plusone
                ? ' (Visiteur)'
                : ' (joueur libre)'}
            </h1>
            {this.state.render ? <Component canRender={this.state.render} /> : <Loading />}
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

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardLayout)
}
