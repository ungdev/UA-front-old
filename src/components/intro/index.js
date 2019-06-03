import React from 'react';

import './intro.css';

const logo = '/static/assets/ua2019.nologo.png';
const csgo = '/static/assets/csgo.jpg';
const hearthstone = '/static/assets/hs.jpg';
const lol = '/static/assets/lol.jpg';
const fortnite = '/static/assets/fortnite.jpg';
const smbu = '/static/assets/smbu.jpg';

const Intro = props => {
  const imgs = [lol, smbu, csgo, fortnite, hearthstone].map(img => ({
    backgroundImage: `url(${img})`,
    // backgroundPosition: 'center 15%'
  }));

  imgs[1].backgroundPosition = 'right';

  return (
    <div className="a-intro">
      <div className="a-intro__shadow" />
      <div className="a-intro__images">
        <div className="a-intro__images__image" style={imgs[0]} />
        <div className="a-intro__images__image" style={imgs[1]} />
        <div className="a-intro__images__image" style={imgs[2]} />
        <div className="a-intro__images__image" style={imgs[3]} />
        <div className="a-intro__images__image" style={imgs[4]} />
      </div>
      <div className="a-intro__logo">
        <img src={logo} alt="UTT Arena Logo" />
        <h1>
          UTT ARENA
          <br />
          2019
        </h1>
      </div>
    </div>
  );
};

export default Intro;
