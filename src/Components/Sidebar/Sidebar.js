import React, { useState } from 'react'
import './Sidebar.css'

const SideBar = ({ pl1, currentGame, p1Wins, p2Wins }) => {
    const dynamicIcon = pl1 ? currentGame.player1.logo : currentGame.player2.logo
    const houseName = pl1 ? currentGame.player1.name : currentGame.player2.name
    const backgroundImage = pl1 ? "player-bar" : "player-bar player-2"
    const wins = p1Wins ? p1Wins : p2Wins

    return (
        <div className={backgroundImage}>
            <h2>{houseName}</h2>
            <img src={dynamicIcon} className="icon"></img>
            <h3>{wins} Reigns</h3>
        </div>
    )
}

export default SideBar
