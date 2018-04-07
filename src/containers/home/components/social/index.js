import React from 'react'

import './social.css'

import discord from '../../../../assets/discord.svg'
import facebook from '../../../../assets/facebook.svg'
import youtube from '../../../../assets/youtube.svg'

const Social = () => {
  const d = { backgroundImage: `url(${discord})` }
  const f = { backgroundImage: `url(${facebook})` }
  const y = { backgroundImage: `url(${youtube}` }

  return (
    <div className="a-social">
      <div className="a-social__icon" style={d}>
      </div>
      <div className="a-social__icon" style={f}>
      </div>
      <div className="a-social__icon" style={y}>
      </div>
    </div>
  )
}

export default Social
