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
            <Informations />
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
