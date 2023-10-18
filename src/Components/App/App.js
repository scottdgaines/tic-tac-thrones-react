import React, { useState } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar'
import Grid from '../Grid/Grid'
import Game from '../../Game'
import { player1, player2 } from '../../players'

function App() {
  const [currentGame, setCurrentGame] = useState(new Game(player1, player2))
  const [p1Wins, setP1Wins] = useState(0)
  const [p2Wins, setP2Wins] = useState(0)

  const updateWins = () => {
      setP1Wins(currentGame.player1.wins)
      setP2Wins(currentGame.player2.wins)
}  

console.log(currentGame)

  return (
    <div className="body">
      <Sidebar pl1={true} currentGame={currentGame} p1Wins={p1Wins} />
      <Grid currentGame={currentGame} updateWins={updateWins} setCurrentGame={setCurrentGame} />
      <Sidebar currentGame={currentGame} p2Wins={p2Wins} />
    </div>
  );
}

export default App;
