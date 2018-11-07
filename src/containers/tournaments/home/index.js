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

const Home = props => {
  const tournaments = [
    {
      id: 1,
      name: 'League of Legends',
      img: lol,
      link: props.goToLOL
    },
    {
      id: 2,
      name: 'Fortnite',
      img: fortnite,
      link: props.goToFortnite
    },
    {
      id: 3,
      name: 'Counter Strike : Global Offensive(COMPLET)',
      img: csgo,
      link: props.goToCSGO
    },
    {
      id: 4,
      name: 'Hearthstone',
      img: hearthstone,
      link: props.goToHS
    },
    {
      id: 5,
      name: 'Super Smash Bros Ultimate',
      img: ssbu,
      link: props.goToSSBU
    },
  ]
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      <Category>Les tournois</Category>

      <div className="a-tournament-buttons">
        {tournaments.map(tournament => (
          <button
            key={tournament.id}
            onClick={tournament.link}
            style={{ backgroundImage: `url(${tournament.img})`}}
          >
            <div className="a-tournament-shadow"/>
            <div className="a-tournament-title"><h1>{tournament.name}</h1></div>
          </button>
          ))}
      </div>
    </React.Fragment>
  )
}


const mapDispatchToProps = dispatch => ({
  goToLOL: () => dispatch(push('/tournaments/lol')),
  goToFortnite: () => dispatch(push('/tournaments/fortnite')),
  goToCSGO: () => dispatch(push('/tournaments/csgo')),
  goToHS: () => dispatch(push('/tournaments/hs')),
  goToSSBU: () => dispatch(push('/tournaments/ssbu'))
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
