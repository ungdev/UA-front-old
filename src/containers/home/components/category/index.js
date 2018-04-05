import React from 'react'

import './category.css'

const Category = (props) => (
  <div className="a-category">
    <h1>{props.children}</h1>
  </div>
)

export default Category
