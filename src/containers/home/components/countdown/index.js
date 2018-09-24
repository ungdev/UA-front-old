import React from 'react'
import Countdown from 'react-countdown-now'

import './countdown.css'

const _Countdown = props => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return null
    } else {
      return (<React.Fragment>
        <h1>
          <div>{days}</div>
          <div>{hours}</div>
          <div>{minutes}</div>
          <div>{seconds}</div>
        </h1>
        <h2>
          <div>JOURS</div>
          <div>HEURES</div>
          <div>MINUTES</div>
          <div>SECONDES</div>
        </h2>
      </React.Fragment>)
    }
  }
  return (
    <div className="a-countdown">
      <Countdown date={props.date} renderer={renderer}/>
    </div>)
}

export default _Countdown
