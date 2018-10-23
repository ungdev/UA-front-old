import React from 'react'
import { connect } from 'react-redux'

import './items.css'

class Cart extends React.Component {
  constructor() {
    super()
  }

  getGender(shirt) {
    return shirt.charAt(0) === 'h' ? 'Homme' : 'Femme'
  }
  getSize(shirt) {
    return shirt.substr(1, shirt.length - 1).toUpperCase()
  }
  render() {
    if (!this.props.user) return null
    const { user } = this.props
    let { orders } = user
    orders = orders.filter(order => order.paid)
    let items = {
      shirts: [],
      ethernet: 0,
      ethernet7: 0,
      kaliento: 0,
      mouse: 0,
      keyboard: 0,
      headset: 0,
      screen24: 0,
      screen27: 0,
      chair: 0,
      gamingPC: 0,
      streamingPC: 0,
      laptop: 0,
      tombola: 0,
    }
    orders.forEach(order => {
      if (order.plusone) items.plusone = true
      if (order.place) items.place = true
      if (order.shirt !== 'none') items.shirts.push(order.shirt)
      if (order.ethernet) items.ethernet++
      if (order.ethernet7) items.ethernet7++
      if (order.kaliento) items.kaliento++
      if (order.mouse) items.mouse++
      if (order.keyboard) items.keyboard++
      if (order.headset) items.headset++
      if (order.screen24) items.screen24++
      if (order.screen27) items.screen27++
      if (order.chair) items.chair++
      if (order.gamingPC) items.gamingPC++
      if (order.streamingPC) items.streamingPC++
      if (order.tombola) items.tombola += order.tombola
    })
    console.log(orders, items)
    return (
      <div className="a-dashboard-items">
        <h2>Listes des achats</h2>
        <div className="a-dashboard-items-content">
          <ul>
            {items.place && <li>Place {items.plusone ? 'Visiteur' : 'Joueur'}</li>}
            {items.shirts.length > 0 && items.shirts.map(shirt => (<li>
                T-shirt {this.getGender(shirt)} {this.getSize(shirt)}
              </li>))}
              {items.ethernet > 0 && <li>Câble ethernet de 5m x{items.ethernet}</li>}
              {items.ethernet7 > 0 && <li>Câble ethernet de 7m x{items.ethernet7}</li>}
              {items.kaliento > 0 && <li>Location chauffeur de main électrique Kaliento x{items.kaliento}</li>}
              {items.mouse > 0 && <li>Location Souris Gaming x{items.mouse}</li>}
              {items.keyboard > 0 && <li>Location Clavier Gaming x{items.keyboard}</li>}
              {items.headset > 0 && <li>Location Casque Gaming x{items.headset}</li>}
              {items.screen24 > 0 && <li>Location Écran 24" x{items.screen24}</li>}
              {items.screen27 > 0 && <li>Location Écran 27" x{items.screen27}</li>}
              {items.chair > 0 && <li>Location Chaise Gaming x{items.chair}</li>}
              {items.gamingPC > 0 && <li>Location PC Gaming x{items.gamingPC}</li>}
              {items.streamingPC > 0 && <li>Location PC Streaming x{items.streamingPC}</li>}
              {items.laptop > 0 && <li>Location PC Portable Gaming x{items.laptop}</li>}
              {items.tombola > 0 && <li>Tombola x{items.tombola}</li>}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
