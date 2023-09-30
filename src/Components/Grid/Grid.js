import React from 'react'
import './Grid.css'
import Tile from '../Tile/Tile'

const Grid = () => {

    const tileIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const tiles = tileIDs.map(id => {
        return <Tile id={id} />
    })
    console.log(tiles)

  return (
    <div>
        <h1>Tic-Tac-Thrones</h1>
        <span className='grid'>
        {tiles}
        </span>
    </div>
  )
}

export default Grid
