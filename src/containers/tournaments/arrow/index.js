import React from 'react'
import './arrow.css'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'



const Arrow = props => {
  return (
    <div className="a-header__arrow-container" onClick={props.goToTournaments}>
      <div className="a-header__arrow-container__arrow" />
    </div>
    )
}


const mapDispatchToProps = dispatch => ({
  goToTournaments: () => dispatch(push('/tournaments'))
})

export default connect(
  null,
  mapDispatchToProps
)(Arrow)
