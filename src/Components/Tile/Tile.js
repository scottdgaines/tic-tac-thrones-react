import React, { useEffect, useState } from 'react'
import './Tile.css'

const Tile = ({ id, currentGame, setBanner, displayWins, p1Tiles, p2Tiles }) => {
    const [playerLogo, setPlayerLogo] = useState()
    const [open, setOpen] = useState(true)

    useEffect(() => {
        determineLogo(id)
    }, [])
    
    const determineLogo = (id) => {
        if (currentGame.player1.tiles.includes(id)) {
            setPlayerLogo(<img src={currentGame.player1.logo} className='tile-icon' />)
        } else if (currentGame.player2.tiles.includes(id)) {
            setPlayerLogo(<img src={currentGame.player2.logo} className='tile-icon' />)
        } else {
            setPlayerLogo(null)
        }
    }
        
    const claimTile = (id) => {
        const available = currentGame.verifyTile(id)
        const win = currentGame.checkWinConditions()
        
        if (available && !win) {
            setOpen(false)
            determineLogo(id)
            currentGame.togglePlayer()
            setBanner(`It is ${currentGame.currentTurn.name}'s Turn`)
        } else if ( available && win) {
            setBanner(`${currentGame.currentTurn.name} sits upon the Iron Throne`)
            displayWins()
        } 
    }
    
  return (
    <div> 
        <article
            className="tile"    
            id={id}
            onClick={(e) => {
                if (open) {
                claimTile(e.target.id)}}}
            >
                {playerLogo}
            </article>
    </div>
  )
}

export default Tile
