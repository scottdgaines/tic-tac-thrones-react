import React from 'react'
import './Grid.css'

const Grid = () => {
  return (
    <>
        <h1>Tic-Tac-Thrones</h1>
        <div className="grid"> 
            <article className="tile t1" id="1"></article>
            <article className="tile t2" id={2}></article>
            <article className="tile t3" id={3}></article>
            <article className="tile t4" id={4}></article>
            <article className="tile t5" id={5}></article>
            <article className="tile t6" id={6}></article>
            <article className="tile t7" id={7}></article>
            <article className="tile t8" id={8}></article>
            <article className="tile t9" id={9}></article>
        </div>
    </>
  )
}

export default Grid
