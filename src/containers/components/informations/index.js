import React from 'react'
import Button from '../../../components/button'
import { Link } from 'react-router-dom'

import './informations.css'

const Informations = () => (
  <div className="a-informations">
    <h2>VENEZ RETROUVER L'AMBIANCE D'UNE LAN PARTY AUTHENTIQUE AVEC VOTRE ÉQUIPE.</h2>
    <p>
        L'UTT Arena revient pour sa 16<sup>ème</sup> édition les <span>7, 8 et 9 décembre 2018</span>. Cette édition aura
      lieu – comme l'année dernière – dans le cadre du <span>Festival des Jeux</span> au Parc des Expositions de Troyes, le Cube. Au programme
        <span> 5 tournois</span> sur des incontournables de l'E-sport, du skill, des personnalités et des
      rencontres, de nombreuses animations, des <span>lots</span> et du <span>cashprize</span> à gagner, qui rendront cette édition plus intense
      et vibrante que jamais. Pas fan des jeux proposés ? Pas envie d’être dans un cadre compétitif
      ? L’UTT Arena propose un <span>tournoi libre</span>, composé des jeux que vous choisissez ! Alors récupère ta
      souris, ton casque et ton câble réseau, branche ton écran et <span>viens imposer la domination de
      ton équipe dans le Cube</span>.
    </p>

    <h2>EN CLAIR :</h2>
    <div className="a-informations__table">
      <div className="a-informations__table__row">
        <div className="a-informations__table__row__cell">Format</div>
        <div className="a-informations__table__row__cell">Bring Your Own Computer (casque, multiprise et RJ45 à amener)</div>
      </div>
      <div className="a-informations__table__row">
        <div className="a-informations__table__row__cell">Ouverture</div>
        <div className="a-informations__table__row__cell">7 décembre 2018 - 17h</div>
      </div>
      <div className="a-informations__table__row">
        <div className="a-informations__table__row__cell">Fermeture</div>
        <div className="a-informations__table__row__cell">9 décembre 2018 - 18h</div>
      </div>
      <div className="a-informations__table__row">
        <div className="a-informations__table__row__cell">Nourriture</div>
        <div className="a-informations__table__row__cell">Sur place à prix minis</div>
      </div>
      <div className="a-informations__table__row">
        <div className="a-informations__table__row__cell">Horaires</div>
        <div className="a-informations__table__row__cell">24h/24 (nourriture aussi)</div>
      </div>
      <div className="a-informations__table__row">
        <div className="a-informations__table__row__cell">Places</div>
        <div className="a-informations__table__row__cell">460</div>
      </div>
      <div className="a-informations__table__row">
        <div className="a-informations__table__row__cell">Tarif</div>
        <div className="a-informations__table__row__cell">15€</div>
      </div>
      <div className="a-informations__table__row">
        <div className="a-informations__table__row__cell">&Acirc;ge minimum</div>
        <div className="a-informations__table__row__cell">15 ans</div>
      </div>
      <div className="a-informations__table__row">
        <div className="a-informations__table__row__cell">Tournois</div>
        <div className="a-informations__table__row__cell">5 (les tournois commencent le samedi à 10h précises)</div>
      </div>
    </div>

    <div className="a-informations__more">
      <Link to={'/informations'}>
        <Button raised={true}>Plus d'infos</Button>
      </Link>
    </div>
  </div>
)

export default Informations
