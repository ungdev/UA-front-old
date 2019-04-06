import React from 'react'
import HomeLayout from '../../src/layouts/homeLayout'
import Category from '../../src/components/category'

import partners from '../../src/variables/partners'

import './partners.css'

export default class Partners extends React.Component {
  render() {
    return (
      <HomeLayout
        title="Nos partenaires"
        url="/partners"
        description="Voici la présentation de nos partenaires qui nous soutiennent pour cette édition de l'UTT Arena"
      >
        <main className="a-partners-main">
          <Category>Nos partenaires</Category>
          <div className="a-partners-list">
            {partners.map((partner, i) => (
              <a key={i} className="a-partners-item" href={partner.url}>
                <div className="a-partners-image">
                  <img src={partner.image} key={i} alt={partner.name} />
                </div>
                <div className="a-partners-text">
                  {partner.description.map((desc, descId) => (
                    <p key={descId}>{desc}</p>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </main>
      </HomeLayout>
    )
  }
}
