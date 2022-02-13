import React from 'react';
import './App.css';
import Game from './components/Game';
import Introduction from './components/Introduction';
import { useState } from 'react'

const App = () => {

  const [gameState, setGameState] = useState('intro');

  const changeGameState = (newState) => {
    setGameState(newState);
  }

  return (
    <div className="App">
      <header>
          <h1>Tricky Project</h1>
      </header>
      {gameState === "intro" && 
        <Introduction 
          onClick={() => changeGameState("game")}
        />
      }
      {gameState === "game" &&
        <Game 
          finishGame={() => changeGameState("end")}
        />
      }
      {gameState === "end" && 
        <div>
          <p>GAME OVER</p>
          <p>ICI Affichage du score etc.</p>
        </div>
      }
    </div>
  );
}

export default App;
