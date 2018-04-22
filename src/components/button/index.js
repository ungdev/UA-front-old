import React from 'react'
import classnames from 'classnames'

import './button.css'

const Button = props => {
  const classes = classnames('a-button', { raised: props.raised })

  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
