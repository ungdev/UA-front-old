import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/button';
import Countdown from '../countdown';
import Category from '../category';
import Spotlights from '../spotlights';

import './informations.css';

const Informations = () => (
  <div>
    <div className="colorback1">
      <div className="a-informations">
        <Countdown date={new Date('December 7, 2018 17:00:00')} />
        <Category id="spotlights" className="colorback2">
          Informations
        </Category>
        <h2>VENEZ RETROUVER L'AMBIANCE D'UNE LAN PARTY AUTHENTIQUE AVEC VOTRE ÉQUIPE.</h2>
        <p>
          L'UTT Arena revient pour sa 16<sup>ème</sup> édition les{' '}
          <span>7, 8 et 9 décembre 2018</span>. Cette édition aura lieu – comme l'année dernière –
          dans le cadre du <span>Festival des Jeux</span> au Parc des Expositions de Troyes, le
          Cube. Au programme
          <span> 5 tournois</span> sur des incontournables de l'E-sport, du skill, des personnalités
          et des rencontres, de nombreuses animations, des <span>lots</span> et du{' '}
          <span>cashprize</span> à gagner, qui rendront cette édition plus intense et vibrante que
          jamais. Pas fan des jeux proposés ? Pas envie d’être dans un cadre compétitif ? L’UTT
          Arena propose un <span>tournoi libre</span>, composé des jeux que vous choisissez ! Alors
          récupère ta souris, ton casque et ton câble réseau, branche ton écran et{' '}
          <span>viens imposer la domination de ton équipe dans le Cube</span>.
        </p>

        <div className="a-informations__trailer">
          <iframe
            src="https://www.youtube.com/embed/YZKiylJWSCM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer UTT ARENA 2018"
          />
        </div>
      </div>
    </div>

    <div className="colorback2">
      <div className="a-informations">
        <tbody>
          <tr>
            <th scope="row">Format</th>
            <td>Bring Your Own Computer (casque, multiprise et RJ45 à amener)</td>
          </tr>
          <tr>
            <th scope="row">Ouverture</th>
            <td>7 décembre 2018 - 17h</td>
          </tr>
          <tr>
            <th scope="row">Fermeture</th>
            <td>9 décembre 2018 - 18h</td>
          </tr>
          <tr>
            <th scope="row">Nourriture</th>
            <td>Sur place à prix minis</td>
          </tr>
          <tr>
            <th scope="row">Horaires</th>
            <td>24h/24 (nourriture aussi)</td>
          </tr>
          <tr>
            <th scope="row">Places</th>
            <td>460</td>
          </tr>
          <tr>
            <th scope="row">Tarif</th>
            <td>15€</td>
          </tr>
          <tr>
            <th scope="row">&Acirc;ge minimum</th>
            <td>15 ans</td>
          </tr>
          <tr>
            <th scope="row">Tournois</th>
            <td>5 (les tournois commencent le samedi à 10h précises)</td>
          </tr>
        </tbody>

        <div className="a-informations__more">
          <Link to="/informations">
            <Button raised>Plus d'infos</Button>
          </Link>
          <Link to="/gallery">
            <Button raised>Photos</Button>
          </Link>
        </div>
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
      </div>
    </div>

    <div className="colorback1">
      <div className="a-informations">
        <Category id="spotlights">Tournois</Category>
        <Spotlights />
      </div>
    </div>
  </div>
);

export default Informations;
