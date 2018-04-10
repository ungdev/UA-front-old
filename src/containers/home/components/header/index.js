import React from 'react'
import { connect } from 'react-redux'

import Button from '../../../../components/button'

import './header.css'

const Header = props => {
  let loginText = (props.hasUser) ? 'Dashboard' : 'Connexion'

  return (
    <header className="a-intro-header">
      <div className="a-intro-header__background"></div>
      <nav className="a-intro-header__nav">
        <div>
          <Button>Informations</Button>
        </div>
        <div>
          <Button size="medium" theme="orange">{loginText}</Button>
        </div>
        <div>
          <Button>Tournois</Button>
        </div>
      </nav>
    </header>
  )
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Header)
