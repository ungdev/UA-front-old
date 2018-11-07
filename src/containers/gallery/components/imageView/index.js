import React from 'react'

import './imageView.css'

class ImageView extends React.Component {
  constructor(props) {
    super(props)

    this.imageClickVal = false

    this.imageClick = this.imageClick.bind(this)
    this.containerClick = this.containerClick.bind(this)
  }

  async imageClick() {
    this.imageClickVal = true
  }

  containerClick() {
    if(!this.imageClickVal) {
      this.props.close()
    }
    else {
      this.imageClickVal = false
    }
  }

  render() {
    if(this.props.src === null) {
      return null
    }
    
    return (
      <React.Fragment>
        <div className="imageview__container" onClick={this.containerClick}>
          <div className="imageview__close" onClick={this.props.close}>&times;</div>
          <div className="imageview__content">
            <img src={this.props.src} alt="" onClick={this.imageClick} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ImageView