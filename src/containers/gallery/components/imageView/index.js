import React from 'react'

import './imageView.css'

class ImageView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: this.props.index
    }

    this.preventClose = false

    this.keydownHandle = this.keydownHandle.bind(this)
    this.leftArrowClick = this.leftArrowClick.bind(this)
    this.rightArrowClick = this.rightArrowClick.bind(this)
    this.imageClick = this.imageClick.bind(this)
    this.containerClick = this.containerClick.bind(this)
    this.close = this.close.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keydownHandle)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownHandle)
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.setState({
        index: this.props.index
      })
    }
  }

  keydownHandle(e) {
    if(this.state.index !== null) {
      switch(e.keyCode) {
        // Escape key
        case 27:
          this.setState({
            index: null
          })
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

  leftArrowClick() {
    if(this.state.index > 0) {
      this.setState({
        index: this.state.index - 1
      })
    }
    
    this.preventClose = true
  }

  rightArrowClick() {
    if(this.state.index < this.props.src.length - 1) {
      this.setState({
        index: this.state.index + 1
      })
    }

    this.preventClose = true
  }

  imageClick() {
    this.preventClose = true
  }

  containerClick() {
    if(!this.preventClose) {
      this.setState({
        index: null
      })
    }
    else {
      this.preventClose = false
    }
  }

  close() {
    this.setState({
      index: null
    })

    this.preventClose = false
  }

  render() {
    if(this.props.src === null || this.state.index === null) {
      return null
    }
    
    return (
      <React.Fragment>
        <div className="imageview__container" onClick={this.containerClick}>
          <div className="imageview__close" onClick={this.close}>&times;</div>
          <div className="imageview__content">
            <div className={'imageview__arrow__left' + (this.state.index > 0 ? '' : ' disabled')} onClick={this.leftArrowClick} title="Photo précédente">
              <div className="imageview__arrow">
                &lsaquo;
              </div>
            </div>

            <img src={this.props.src[this.state.index]} alt="" onClick={this.imageClick} />

            <div className={'imageview__arrow__right' + (this.state.index < this.props.src.length - 1 ? '' : ' disabled')} onClick={this.rightArrowClick} title="Photo suivante">
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