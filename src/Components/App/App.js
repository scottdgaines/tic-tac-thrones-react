import React, { useState } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar'
import Grid from '../Grid/Grid'
import Game from '../../Game'
import starkLogo from '../../assets/stark-white.png'
import lannisterLogo from '../../assets/lannister-white.png'

function App() {
  const player1 = {
    name: 'House Stark',
    id: 'one',
    logo: starkLogo
  }
  const player2 = {
    name: 'House Lannister',
    id: 'two',
    logo: lannisterLogo
  }
  const [currentGame, setCurrentGame] = useState(new Game(player1, player2))
  const [p1Wins, setP1Wins] = useState(0)
  const [p2Wins, setP2Wins] = useState(0)

  const displayWins = () => {
      setP1Wins(currentGame.player1.wins)
      setP2Wins(currentGame.player2.wins)

}  

  return (
    <div className="body">
      <Sidebar pl1={true} currentGame={currentGame} p1Wins={p1Wins} />
      <Grid currentGame={currentGame} displayWins={displayWins} />
      <Sidebar currentGame={currentGame} p2Wins={p2Wins} />
    </div>
  );
}

export default App;
