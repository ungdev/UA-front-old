import React from 'react'

import './social.css'

import discord from '../../../../assets/discord.png'
import facebook from '../../../../assets/facebook.png'
import youtube from '../../../../assets/youtube.png'

const Social = () => (
  <div className="a-social">
    <div className="a-social__icon">
      <img src={discord} alt="Discord" />
    </div>
    <div className="a-social__icon">
      <img src={facebook} alt="Facebook" />
    </div>
    <div className="a-social__icon">
      <img src={youtube} alt="YouTube" />
    </div>
  </div>
)

export default Social
