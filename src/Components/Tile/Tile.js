import React, { useState } from 'react'
import './Tile.css'

const Tile = ({ key, id, currentGame, setCurrentPlayer }) => {
    const [playerLogo, setPlayerLogo] = useState()

    const claimTile = (selection) => {
        const available = currentGame.verifyTile(selection)
        if (available) {
            setPlayerLogo(<img src={currentGame.currentTurn.logo} className='tile-icon' />)
            currentGame.togglePlayer()
            setCurrentPlayer(currentGame.currentTurn.name)
        }
    }

  return (
    <div> 
        <article
            className="tile"    
            id={id}
            onClick={(e) => {
                claimTile(e.target.id)}}
            >
                {playerLogo}
            </article>
    </div>
  )
}

export default Tile
