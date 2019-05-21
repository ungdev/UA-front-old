import React from 'react'
import { connect } from 'react-redux'
import Category from '../src/components/category'
import Informations from '../src/components/informations'
import Spotlights from '../src/components/spotlights'

import Partners from '../src/components/partners'
import HomeLayout from '../src/layouts/homeLayout'
import Intro from '../src/components/intro'
import Countdown from '../src/components/countdown'

class Home extends React.Component {
  render() {
    return (
      <HomeLayout>
        <Intro />
        <main className="a-home">
          <div className="a-home__content">
            <Countdown date={new Date('December 6, 2019 17:00:00')} />
            <Category id="informations">Informations</Category>
            <Informations />
            <div className="a-home__map">
              <iframe
                height="320"
                title="Google Maps"
                src="https://maps.google.com/maps?q=UTT Arena&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />

              <p>Vous pouvez vous rendre à Troyes en train ou par l'A5.</p>
            </div>
            <Category id="spotlights">Tournois</Category>
            <Spotlights />
          </div>
          <Partners />
        </main>
      </HomeLayout>
    )
  }
}

export default connect(
  null,
  null
)(Home)
