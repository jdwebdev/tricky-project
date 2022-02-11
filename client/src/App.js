import React from 'react';
import './App.css';
import Game from './components/Game';


const App = () => {

  const [gameState, setGameState] = React.useState('start');

  const handleClick = () => {
    setGameState("game");
    // console.log(gameState)
  }

  return (
    <div className="App">
      <header>
          <h1>Tricky Project</h1>
      </header>
      {gameState === "start" && 
        <div className="startBtnContainer"> 
          <button className="startBtn" onClick={handleClick}>Start</button>
        </div>
      }
      {gameState === "game" &&
        <Game />
      }
    </div>
  );
}

export default App;
