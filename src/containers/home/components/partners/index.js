import React from 'react'

import './partners.css'
import Button from '../../../../components/button'

class Partners extends React.Component {
  render() {
    const partners = process.env.REACT_APP_PARTNERS.split(',').map(partner => ({
      name: partner,
      image: `${process.env.PUBLIC_URL}/${partner}.png`,
      url: process.env[`REACT_APP_PARTNER_${partner.toUpperCase()}_LINK`]
    }))

    return (
      <div className="a-partners">
        <h2 className="a-partners__partner">PARTENAIRES</h2>
        <div className="a-partners__images">
          {partners.map((partner, i) => <img src={partner.image} key={i} alt={partner.name} />)}
        </div>
        <Button raised={true}>Nous soutenir</Button>
      </div>
    )
  }
}

export default Partners
