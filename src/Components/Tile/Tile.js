import React, { useState } from 'react'
import './Tile.css'

const Tile = ({ id, currentGame, setBanner, updateWins, resetRound }) => {
    const [playerLogo, setPlayerLogo] = useState()
    
    const placeLogo = () => {
        if (currentGame.currentTurn === currentGame.player1) {
            setPlayerLogo(<img src={currentGame.player1.logo} className='tile-icon' />)
        } else if (currentGame.currentTurn === currentGame.player2) {
            setPlayerLogo(<img src={currentGame.player2.logo} className='tile-icon' />)
        } 
    }

    const changeTurn = () => {
        currentGame.togglePlayer()
        setBanner(`It is ${currentGame.currentTurn.name}'s Turn`)
    }

    const resetLogo = () => {
        setPlayerLogo()
    }

    const declareWin = () => {
        setBanner(`${currentGame.currentTurn.name} sits upon the Iron Throne`)
        updateWins()
        setTimeout(resetRound, 3000)
        setTimeout(resetLogo, 3000)
    }
        
    const claimTile = (id) => {
        const available = currentGame.verifyTile(id)
        const win = currentGame.checkWinConditions()
        
        if (available && !win) {
            placeLogo()
            changeTurn()
        } else if ( available && win) {
            placeLogo()
            declareWin()
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