import React from 'react'
import './Sidebar.css'
import starkIcon from '../../assets/stark-white.png'
import lannisterIcon from '../../assets/lannister-white.png'

const SideBar = ({ player1, player2 }) => {
    const dynamicIcon = player1 ? starkIcon : lannisterIcon
    const houseName = player1 ? 'Stark' : 'Lannister'
    const backgroundImage = player1 ? "player-bar" : "player-bar player-2"
  
    return (
        <div className={backgroundImage}>
            <h2>{`House ${houseName}`}</h2>
            <img src={dynamicIcon} className="icon"></img>
        </div>
    )
}

export default SideBar
