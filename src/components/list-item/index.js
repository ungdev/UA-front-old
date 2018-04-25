import React from 'react'

import './list-item.css'

const ListItem = props => (
  <li className="a-list-item" onClick={props.onClick}>
    {props.children}
  </li>
)

export default ListItem
