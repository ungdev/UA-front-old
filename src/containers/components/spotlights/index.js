import React from 'react'

import './spotlights.css'

const Spotlights = () => (
  <div className="a-spotlights">
    <h2>LES CINQ JEUX À L’UTT ARENA 2018.</h2>

    <div style={{ marginTop: '26px', textAlign: 'justify' }}>
      <span>League of Legends</span>, <span>Counter-Strike: Global Offensive (COMPLET)</span>, <span>Hearthstone
      </span>, <span>Super Smash Bros Ultimate</span> et <span>Fortnite</span>. Les cinq jeux
      seront présents pour cette édition 2018.
    </div>
    <br /><br />

    <span>Répartition des récompenses :</span>
    <ul style={{ marginTop: '5px', marginBottom: '5px' }}>
      <li>1<sup>ère</sup> place : cashprize et lots</li>
      <li>2<sup>ème</sup> et 3<sup>ème</sup> places : lots</li>
    </ul>
    <br />

    <span>Répartition des cashprizes :</span>
    <ul style={{ marginTop: '5px', marginBottom: '5px' }}>
      <li>LoL (pro) : 1250€</li>
      <li>Fortnite : 1000€</li>
      <li>CS:GO : 450€</li>
      <li>SSBU : 150€</li>
      <li>Hearthstone : 150€</li>
    </ul>
    <br />

    <span>Nombre de places par tournoi :</span>
    <ul style={{ marginTop: '5px', marginBottom: '20px' }}>
      <li>LoL : 16 slots Pros et 16 slots Amateurs (équipes de 5)</li>
      <li>Fortnite : 24 slots (équipes de 4)</li>
      <li>CS:GO : 8 slots (équipes de 5)</li>
      <li>SSBU : 64 slots (en solo)</li>
      <li>Hearthstone : 32 slots (en solo)</li>
    </ul>
  </div>
)

export default Spotlights
