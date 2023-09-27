import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar'
import Grid from '../Grid/Grid'
import Game from '../../Game'

function App() {
  const [currentGame, setCurrentGame] = useState()

  useEffect(() => {
    loadGame()
  }, [])
  
  const loadGame = () => {
    const player1 = {
      name: 'House Stark',
      id: 'one',
      logo: '../../assets/stark-white.png'
    }
    const player2 = {
      name: 'House Lannister',
      id: 'two',
      logo: '../../assets/lannister-white.png'
    }
  
    setCurrentGame(new Game(player1, player2))
  }

  return (
    <div className="body">
      <Sidebar player1={true} />
      <Grid />
      <Sidebar player2={true} />
    </div>
  );
}

export default App;
