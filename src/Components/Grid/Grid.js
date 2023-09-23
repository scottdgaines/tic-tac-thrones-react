import React from 'react'
import './Grid.css'

const Grid = () => {
  return (
    <>
        <p>Tic-Tac-Thrones</p>
        <div className="grid"> 
            <article className="tile t1" id={1}></article>
            <article className="tile t1" id={2}></article>
            <article className="tile t1" id={3}></article>
            <article className="tile t1" id={4}></article>
            <article className="tile t1" id={5}></article>
            <article className="tile t1" id={6}></article>
            <article className="tile t1" id={7}></article>
            <article className="tile t1" id={8}></article>
            <article className="tile t1" id={9}></article>
        </div>
    
    </>
  )
}

export default Grid
