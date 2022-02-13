import React from 'react';
import './App.css';
import Game from './components/Game';
import Introduction from './components/Introduction';
import { useState } from 'react'

const App = () => {

  const [gameState, setGameState] = useState('intro');

  const handleClick = () => {
    setGameState("game");
  }

  return (
    <div className="App">
      <header>
          <h1>Tricky Project</h1>
      </header>
      {gameState === "intro" && 
        <Introduction 
          onClick={handleClick}
        />
      }
      {gameState === "game" &&
        <Game />
      }
    </div>
  );
}

export default App;
