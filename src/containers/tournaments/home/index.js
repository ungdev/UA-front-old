import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import '../tournaments.css'
import csgo from '../../../assets/csgo.jpg'
import hearthstone from '../../../assets/hs.jpg'
import lol from '../../../assets/lol.jpg'
import fortnite from '../../../assets/fortnite.jpg'
import ssbu from '../../../assets/smbu.jpg'
import Category from '../../components/category'
import ScrollToTopOnMount from '../../../components/scrollToTopOnMount'
import { Link } from "react-router-dom";

const Home = props => {
  const tournaments = [
    {
      id: 1,
      name: 'League of Legends (COMPLET)',
      img: lol,
      link: '/tournaments/lol'
    },
    {
      id: 2,
      name: 'Fortnite (COMPLET)',
      img: fortnite,
      link: '/tournaments/fortnite'
    },
    {
      id: 3,
      name: 'Counter Strike : Global Offensive (COMPLET)',
      img: csgo,
      link: '/tournaments/csgo'
    },
    {
      id: 4,
      name: 'Hearthstone',
      img: hearthstone,
      link: '/tournaments/hs'
    },
    {
      id: 5,
      name: 'Super Smash Bros Ultimate',
      img: ssbu,
      link: '/tournaments/ssbu'
    },
  ]
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      <Category>Les tournois</Category>

      <div className="a-tournament-buttons">
        {tournaments.map(tournament => (
          <Link
            key={tournament.id}
            to={tournament.link}
            style={{ backgroundImage: `url(${tournament.img})`}}>
            <div className="a-tournament-shadow"/>
            <div className="a-tournament-title"><h1>{tournament.name}</h1></div>
          </Link>
          ))}
      </div>
    </React.Fragment>
  )
}

export default Home
