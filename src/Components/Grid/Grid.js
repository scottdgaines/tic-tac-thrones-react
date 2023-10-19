import React, { useEffect, useState } from 'react'
import './Grid.css'
import Tile from '../Tile/Tile'
import Game from '../../Game'
import { player1, player2 } from '../../players'

const Grid = ({ currentGame, updateWins, setCurrentGame }) => {
    const [banner, setBanner] = useState(`It is ${currentGame.currentTurn.name}'s Turn`)

    const resetRound = () => {
      currentGame.resetRound()
      setBanner(`It is ${currentGame.currentTurn.name}'s Turn`)
      setTiles(renderTiles())
      console.log(tiles)
    }
    
    const renderTiles = () => {
     return currentGame.tileIDs.map(id => {
        
        return <Tile 
        key={id} 
        id={id}
        currentGame={currentGame} 
        setBanner={setBanner}
        updateWins={updateWins}
        resetRound={resetRound}
        />
      }) 
    }

    const [tiles, setTiles] = useState(renderTiles())

    const prepNewGame = () => {
      setBanner('Winter is Coming')
      setTimeout(resetGame, 3000)
    }

    const resetGame = () => {
      setCurrentGame(new Game(player1, player2))
      currentGame.togglePlayer()
      setBanner(`It is ${currentGame.currentTurn.name}'s Turn`)
      updateWins()
      setTiles(renderTiles())
    }

  return (
    <div>
        <h1>Tic-Tac-Thrones</h1>
        <h2>{banner}</h2>
        <span className='grid'>
            {tiles}
            <button onClick={prepNewGame}>New Game</button>
        </span>
    </div>
  )
}

export default Grid
