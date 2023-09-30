import React, { useState} from 'react'
import './Grid.css'
import Tile from '../Tile/Tile'

const Grid = ({ currentGame }) => {
    const [currentPlayer, setCurrentPlayer] = useState(currentGame.currentTurn.name)
    const tileIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const tiles = tileIDs.map(id => {
        return <Tile 
          key={id} 
          id={id}
          currentGame={currentGame} 
          setCurrentPlayer={setCurrentPlayer} />
    })

  return (
    <div>
        <h1>Tic-Tac-Thrones</h1>
        <h2>It is {currentPlayer}'s turn</h2>
        <span className='grid'>
            {tiles}
        </span>
    </div>
  )
}

export default Grid
