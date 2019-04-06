import React from 'react'
import Category from '../../src/components/category'

import Link from 'next/link'

import './tournaments.css'
import HomeLayout from '../../src/layouts/homeLayout'

const csgo = '/static/assets/csgo.jpg'
const hearthstone = '/static/assets/hs.jpg'
const lol = '/static/assets/lol.jpg'
const fortnite = '/static/assets/fortnite.jpg'
const ssbu = '/static/assets/smbu.jpg'

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
    }
  ]
  return (
    <HomeLayout
      title="Tournois"
      url="/tournaments"
      description="Vous retrouverez sur cette page tous les tournois de l'UTT Arena. L'inscription à l'UTT Arena est fixée à 15€ par joueur. La LAN se déroulera du Vendredi 6 Décembre 18h au Dimanche 8 Décembre à 18h"
    >
      <main className="a-tournaments-main">
        <Category>Les tournois</Category>

        <div className="a-tournament-buttons">
          {tournaments.map(tournament => (
            <Link key={tournament.id} href={tournament.link}>
              <a style={{ backgroundImage: `url(${tournament.img})` }}>
                <div className="a-tournament-shadow" />
                <div className="a-tournament-title">
                  <h1>{tournament.name}</h1>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </HomeLayout>
  )
}

export default Home
