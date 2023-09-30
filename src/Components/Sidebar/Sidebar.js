import React from 'react'
import './Sidebar.css'

const SideBar = ({ pl1, currentGame }) => {
    const dynamicIcon = pl1 ? currentGame.player1.logo : currentGame.player2.logo
    const houseName = pl1 ? currentGame.player1.name : currentGame.player2.name
    const wins = pl1 ? currentGame.player1.wins : currentGame.player2.wins
    const backgroundImage = pl1 ? "player-bar" : "player-bar player-2"

    return (
        <div className={backgroundImage}>
            <h2>{houseName}</h2>
            <img src={dynamicIcon} className="icon"></img>
            <h3>{wins} Reigns</h3>
        </div>
    )
}

export default SideBar
