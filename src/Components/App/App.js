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

  
  return (
    <div className="body">
      <Sidebar pl1={true} currentGame={currentGame} />
      <Grid currentGame={currentGame} />
      <Sidebar currentGame={currentGame} />
    </div>
  );
}

export default App;
