import React from 'react'

import partners from '../../variables/partners'
import './partners.css'

class Partners extends React.Component {
  render() {
    return (
      <div className="a-partners">
        {this.props.noTitle ? null : <h2 className="a-partners__partner">PARTENAIRES</h2>}
        <div className="a-partners_logos">
          {partners.map((partner, i) => (
            <a key={i} className="a-partners__images" href={partner.url}>
              <img src={partner.image} key={i} alt={partner.name} />
            </a>
          ))}
        </div>
        <a
          className="a-partners__link"
          href={`mailto:UTT%20Arena<${process.env.REACT_APP_CONTACT_MAIL}>`}
        >
          Devenir partenaire
        </a>
      </div>
    )
  }
}

export default Partners
