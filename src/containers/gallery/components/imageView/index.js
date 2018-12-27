import React from 'react'

import './imageView.css'

class ImageView extends React.Component {
  constructor(props) {
    super(props)

    this.preventClose = false
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keydownHandle)
  }

  componentDidUnmount() {
    window.removeEventListener('keydown', this.keydownHandle)
  }

  keydownHandle = (e) => {
    if(this.props.index !== null) {
      switch(e.keyCode) {
        // Escape key
        case 27:
          this.props.setIndex(null)
          break
        // Left arrow key
        case 37:
          this.leftArrowClick()
          break
        // Right arrow key
        case 39:
          this.rightArrowClick()
          break
        default:
          break
      }
    }
  }

  leftArrowClick = () => {
    if(this.props.index > 0) {
      this.props.setIndex(this.props.index - 1)
    }
    
    this.preventClose = true
  }

  rightArrowClick = () => {
    if(this.props.index < this.props.src.length - 1) {
      this.props.setIndex(this.props.index + 1)
    }

    this.preventClose = true
  }

  imageClick = () => {
    this.preventClose = true
  }

  containerClick = () => {
    if(!this.preventClose) {
      this.props.setIndex(null)
    }
    else {
      this.preventClose = false
    }
  }

  close = () => {
    this.props.setIndex(null)

    this.preventClose = false
  }

  render() {
    if(this.props.src === null || this.props.index === null) {
      return null
    }
    
    return (
      <React.Fragment>
        <div className="imageview__container" onClick={this.containerClick}>
          <div className="imageview__close" onClick={this.close}>&times;</div>
          <div className="imageview__content">
            <div className={'imageview__arrow__left' + (this.props.index > 0 ? '' : ' disabled')} onClick={this.leftArrowClick} title="Photo précédente">
              <div className="imageview__arrow">
                &lsaquo;
              </div>
            </div>

            <img src={this.props.src[this.props.index]} alt="" onClick={this.imageClick} />

            <div className={'imageview__arrow__right' + (this.props.index < this.props.src.length - 1 ? '' : ' disabled')} onClick={this.rightArrowClick} title="Photo suivante">
              <div className="imageview__arrow">
                &rsaquo;
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ImageView
