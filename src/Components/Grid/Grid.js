import React, { useState} from 'react'
import './Grid.css'
import Tile from '../Tile/Tile'

const Grid = ({ currentGame, displayWins }) => {
    const [banner, setBanner] = useState(`It is ${currentGame.currentTurn.name}'s Turn`)
    //when component renders, it should be looking at each player's tiles array, and asking, for each id within these two arrays, we should render the logo to the corresponding tile
    
    const tiles = currentGame.tiles.map(id => {
        return <Tile 
          key={id} 
          id={id}
          currentGame={currentGame} 
          setBanner={setBanner}
          displayWins={displayWins}
        />
    })

    const resetGame = () => {
      currentGame.resetTiles()
      currentGame.togglePlayer()
      setBanner(`It is ${currentGame.currentTurn.name}'s Turn`)
      displayWins()
    }

  return (
    <div>
        <h1>Tic-Tac-Thrones</h1>
        <h2>{banner}</h2>
        <span className='grid'>
            {tiles}
            <button onClick={resetGame}>Winter is Coming</button>
        </span>
    </div>
  )
}

export default Grid
