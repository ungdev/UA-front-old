import React from 'react'

import './spotlights.css'

const Spotlights = () => (
  <div className="a-spotlights">
    <h2>LES CINQ JEUX À L’UTT ARENA 2018.</h2>
    <p>
      <span>League of Legends</span>, <span>Counter-Strike: Global Offensive</span>, <span>Hearthstone
      </span>, <span>Super Smash Bros Ultimate</span> et <span>Fortnite</span>. Les cinq jeux
      seront présents pour cette édition 2018.
      <br /><br /><br />

      <span>Répartition des cashprizes :</span>
      <ul style={{ marginTop: '5px', marginBottom: '5px' }}>
        <li>LoL (pro) : 1250€</li>
        <li>Fortnite : 1000€</li>
        <li>CS:GO : 450€</li>
        <li>SSBU : 200€</li>
        <li>Hearthstone : 100€</li>
      </ul>
      <div>En plus des cashprizes, des lots seront offerts !</div>
      <br /><br />

      <span>Nombre de places par tournoi :</span>
      <ul style={{ marginTop: '5px', marginBottom: '5px' }}>
        <li>LoL : 8 slots Pros et 24 slots Amateurs (équipes de 5)</li>
        <li>Fortnite : 24 slots (équipes de 4)</li>
        <li>CS:GO : 8 slots (équipes de 5)</li>
        <li>SSBU : 64 slots (en solo)</li>
        <li>Hearthstone : 32 slots (en solo)</li>
      </ul>
    </p>
  </div>
)

export default Spotlights
