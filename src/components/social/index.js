import React from 'react'

import './social.css'

const discord = '/static/assets/discord.svg'
const facebook = '/static/assets/facebook.svg'
const youtube = '/static/assets/youtube.svg'
const twitch = '/static/assets/twitch.svg'
const twitter = '/static/assets/twitter.svg'

const Social = () => {
  return (
    <div className="a-social">
      <a
        target="_blank"
        href={process.env.REACT_APP_DISCORD}
        className="a-social__icon"
        style={{ backgroundImage: `url(${discord})` }}
      >
        &nbsp;
      </a>
      <a
        target="_blank"
        href={process.env.REACT_APP_TWITTER}
        className="a-social__icon"
        style={{ backgroundImage: `url(${twitter})` }}
      >
        &nbsp;
      </a>
      <a
        target="_blank"
        href={process.env.REACT_APP_FACEBOOK}
        className="a-social__icon"
        style={{ backgroundImage: `url(${facebook})` }}
      >
        &nbsp;
      </a>
      <a
        target="_blank"
        href={process.env.REACT_APP_TWITCH}
        className="a-social__icon"
        style={{ backgroundImage: `url(${twitch})` }}
      >
        &nbsp;
      </a>
      <a
        target="_blank"
        href={process.env.REACT_APP_YOUTUBE}
        className="a-social__icon"
        style={{ backgroundImage: `url(${youtube})` }}
      >
        &nbsp;
      </a>
    </div>
  )
}

export default Social
