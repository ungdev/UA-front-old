import React from 'react'

import './scoupModal.css'

import Modal from '../../../../components/modal'
import { StreamingPCModal, GamingPCModal, LaptopModal } from '../moreInfoModal'
import ListItem from '../../../../components/list-item'
import Button from '../../../../components/button'

class ScoupModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      kaliento: false,
      mouse: false,
      keyboard: false,
      headset: false,
      screen24: false,
      screen27: false,
      chair: false,
      gamingPC: false,
      streamingPC: false,
      laptop: false,
      isStreamingModalOpen: false,
      isGamingModalOpen: false,
      isLaptopModalOpen: false,
    }
  }

  submit = () => {
    this.props.onClose(this.state)
  }

  toggleKaliento = () => {
    this.setState({ kaliento: !this.state.kaliento })
  }

  toggleMouse = () => {
    this.setState({ mouse: !this.state.mouse })
  }

  toggleKeyboard = () => {
    this.setState({ keyboard: !this.state.keyboard })
  }

  toggleHeadset = () => {
    this.setState({ headset: !this.state.headset })
  }

  toggleScreen24 = () => {
    this.setState({ screen24: !this.state.screen24 })
  }

  toggleScreen27 = () => {
    this.setState({ screen27: !this.state.screen27 })
  }

  toggleChair = () => {
    this.setState({ chair: !this.state.chair })
  }

  toggleGamingPC = () => {
    this.setState({ gamingPC: !this.state.gamingPC })
  }

  toggleStreamingPC = () => {
    this.setState({ streamingPC: !this.state.streamingPC })
  }

  toggleLaptop = () => {
    this.setState({ laptop: !this.state.laptop })
  }
  
  moreInfoStreaming(e) {
    e.stopPropagation()
    this.setState({ isStreamingModalOpen: true })
  }
  moreInfoGaming(e) {
    e.stopPropagation()
    this.setState({ isGamingModalOpen: true })
  }
  moreInfoLaptop(e) {
    e.stopPropagation()
    this.setState({ isLaptopModalOpen: true })
  }
  
  closeMoreInfo() {
    this.setState({ 
      isStreamingModalOpen: false,
      isGamingModalOpen: false,
      isLaptopModalOpen: false,
     })
  }


  render() {
    const price =
    (this.state.kaliento ? this.props.prices.kaliento : 0) +
    (this.state.mouse ? this.props.prices.mouse : 0) +
    (this.state.keyboard ? this.props.prices.keyboard : 0) +
    (this.state.headset ? this.props.prices.headset : 0) +
    (this.state.screen24 ? this.props.prices.screen24 : 0) +
    (this.state.screen27 ? this.props.prices.screen27 : 0) +
    (this.state.chair ? this.props.prices.chair : 0) +
    (this.state.gamingPC ? this.props.prices.gamingPC : 0) +
    (this.state.streamingPC ? this.props.prices.streamingPC : 0) +
    (this.state.laptop ? this.props.prices.laptop : 0)

    return (
      <React.Fragment>
        <Modal isOpen={this.props.isOpen} onClose={this.props.onClose} name="a-react-scoup-modal">
            <div className="a-scoup-modal">
              <form className="a-scoup-form">
                <h2>Matériel Scoup eSport</h2>
                <div>
                  <ListItem
                    price={`+${this.props.prices.kaliento}`}
                    active={this.state.kaliento}
                    onClick={this.toggleKaliento}
                  >
                    <h3>Kaliento</h3>
                    <span>
                      Louer un chauffeur de main électrique Kaliento
                    </span>
                  </ListItem>
                  <ListItem
                    price={`+${this.props.prices.mouse}`}
                    active={this.state.mouse}
                    onClick={this.toggleMouse}
                  >
                    <h3>Souris</h3>
                    <span>
                    Louer une souris gaming
                    </span>
                  </ListItem>
                </div>
                <div>
                  <ListItem
                    price={`+${this.props.prices.keyboard}`}
                    active={this.state.keyboard}
                    onClick={this.toggleKeyboard}
                  >
                    <h3>Clavier</h3>
                    <span>
                    Louer un clavier gaming
                    </span>
                  </ListItem>
                  <ListItem
                    price={`+${this.props.prices.headset}`}
                    active={this.state.headset}
                    onClick={this.toggleHeadset}
                  >
                    <h3>Casque</h3>
                    <span>
                    Louer un casque gaming
                    </span>
                  </ListItem>
                </div>
                <div>
                  <ListItem
                    price={`+${this.props.prices.chair}`}
                    active={this.state.chair}
                    onClick={this.toggleChair}
                  >
                    <h3>Chaise</h3>
                    <span>
                    Louer une chaise gaming
                    </span>
                  </ListItem>
                  <ListItem
                    price={`+${this.props.prices.screen24}`}
                    active={this.state.screen24}
                    onClick={this.toggleScreen24}
                  >
                    <h3>Écran 24"</h3>
                    <span>
                      Louer un écran 24" 144Hz
                    </span>
                  </ListItem>
                </div>
                <div>
                  <ListItem
                    price={`+${this.props.prices.screen27}`}
                    active={this.state.screen27}
                    onClick={this.toggleScreen27}
                  >
                    <h3>Écran 27"</h3>
                    <span>
                      Louer un écran 27" 144Hz
                    </span>
                  </ListItem>
                  <ListItem
                    price={`+${this.props.prices.laptop}`}
                    active={this.state.laptop}
                    onClick={this.toggleLaptop}
                  >
                    <h3>PC portable</h3>
                    <span>
                      Louer un PC Portable Gaming
                    </span>
                    <Button onClick={(e) => this.moreInfoLaptop(e)} raised className="a-info-button">
                      ?
                    </Button>
                  </ListItem>
                </div>
                <div>
                  <ListItem
                    price={`+${this.props.prices.gamingPC}`}
                    active={this.state.gamingPC}
                    onClick={this.toggleGamingPC}
                  >
                    <h3>PC Gaming</h3>
                    <span>
                    Louer une tour gaming
                    </span>
                    <Button onClick={(e) => this.moreInfoGaming(e)} raised className="a-info-button">
                      ?
                    </Button>
                  </ListItem>
                  <ListItem
                    price={`+${this.props.prices.streamingPC}`}
                    active={this.state.streamingPC}
                    onClick={this.toggleStreamingPC}
                  >
                    <h3>PC streaming</h3>
                    <span>
                    Louer un pc de streamer
                    </span>
                    <Button onClick={(e) => this.moreInfoStreaming(e)} raised className="a-info-button">
                      ?
                    </Button>
                  </ListItem>
                </div>
                <Button onClick={this.submit} raised>
                  Enregistrer le matériel ({price}€)
                </Button>
              </form>
            </div>
        </Modal>
        <StreamingPCModal
          isOpen={this.state.isStreamingModalOpen}
          onClose={this.closeMoreInfo}
        />
        <GamingPCModal
          isOpen={this.state.isGamingModalOpen}
          onClose={this.closeMoreInfo}
        />
        <LaptopModal
          isOpen={this.state.isLaptopModalOpen}
          onClose={this.closeMoreInfo}
        />
      </React.Fragment>
    )
  }
}


export default ScoupModal
