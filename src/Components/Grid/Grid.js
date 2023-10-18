import React, { useState} from 'react'
import './Grid.css'
import Tile from '../Tile/Tile'
import Game from '../../Game'
import { player1, player2 } from '../../players'

const Grid = ({ currentGame, updateWins, setCurrentGame }) => {
    const [banner, setBanner] = useState(`It is ${currentGame.currentTurn.name}'s Turn`)
    const [occupiedTiles, setOccupiedTiles] = useState(currentGame.occupiedTiles)

    const resetRound = () => {
      currentGame.resetRound()
      setOccupiedTiles(currentGame.occupiedTiles)
      setBanner(`It is ${currentGame.currentTurn.name}'s Turn`)
      console.log('after reset', currentGame, occupiedTiles)
    }
    
    const tiles = currentGame.tileIDs.map(id => {
        return <Tile 
          key={id} 
          id={id}
          currentGame={currentGame} 
          setBanner={setBanner}
          updateWins={updateWins}
          resetRound={resetRound}
          occupiedTiles={occupiedTiles}
        />
    })

    const declareNewGame = () => {
      setBanner('Winter is Coming')
      setTimeout(resetGame, 3000)
    }

    const resetGame = () => {
      setCurrentGame(new Game(player1, player2))
      currentGame.togglePlayer()
      setOccupiedTiles([currentGame.occupiedTiles])
      setBanner(`It is ${currentGame.currentTurn.name}'s Turn`)
      updateWins()
    }

  return (
    <div>
        <h1>Tic-Tac-Thrones</h1>
        <h2>{banner}</h2>
        <span className='grid'>
            {tiles}
            <button onClick={declareNewGame}>Winter is Coming</button>
        </span>
    </div>
  )
}

export default Grid
