import React from 'react'

import './home.css'

import Header from './components/header'
import Intro from './components/intro'
import Informations from './components/informations'
import Category from './components/category'
import Social from './components/social'

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
  <div>
    <Header />
    <Intro />

    <main className="a-home">
      <div className="a-home__content">
        <Category>Informations</Category>
        <Informations />
      </div>
    </main>

    <Social />
  </div>
)

export default Home
