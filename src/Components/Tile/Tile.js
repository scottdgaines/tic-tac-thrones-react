import React from 'react'
import './Tile.css'

const Tile = (id) => {

    const placeLogo = (selection) => {
        console.log(selection)
    }

  return (
    <div> 
        <article
            className="tile"    
            id={id}
            onClick={(e) => {
                placeLogo(e.target.id)}}
            ></article>
    </div>
  )
}

export default Tile
