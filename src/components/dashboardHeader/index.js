import React from 'react'
import { connect } from 'react-redux'
import { push } from '../../modules/router'

import './dashboardHeader.css'

const logo = '/static/assets/ua2019.nologo.png'

class Header extends React.Component {
  onArrow = () => {
    const location = window.location.pathname

    if (location.indexOf('/dashboard' > -1) && location !== '/dashboard')
      this.props.push('/dashboard')
    else this.props.push('/')
  }

  render() {
    return (
      <div className="a-header">
        <div className="a-header__arrow-container" onClick={this.onArrow}>
          <div className="a-header__arrow-container__arrow" />
        </div>
        <div className="a-header__logo">
          <img src={logo} alt="UA Logo" height="150" width="150" />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    push: url => dispatch(push(url))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Header)
