import React, { useEffect } from 'react';
import Tile from './Tile';
import { useState } from 'react';
import emptyTile from '../images/empty_tile.png';
import data from '../data'
import player from '../images/player.png';
import pharmacie from '../images/pharmacie.png';
import noMask from '../images/no_mask.png';
// import noMaskToMask from '../images/no_mask_to_mask.png';
// import virus from '../images/virus.png';

const boardWidth = 9; 

const Game = () => {

    const [tileList, setTileList] = useState([]);
    const [currentStage, setCurrentStage] = useState(0);

    useEffect(() => {
        createTileList();
        setCurrentStage(0);
    }, []);

    const createTileList = () => {
        let newList = []
        let imgSrc = emptyTile;
        let tileType = "empty";
        for (let i = 0; i < boardWidth**2; i++) {
            if (i === data.stage[currentStage].playerPos) {
                imgSrc = player;
                tileType = "player";
            } else if (i === data.stage[currentStage].pharmacie) {
                imgSrc = pharmacie;
                tileType = "pharmacie";
            } else if (data.stage[currentStage].noMask.includes(i)){ 
                imgSrc = noMask;
                tileType = "noMask";
            } else {
                imgSrc = emptyTile;
                tileType = "empty"
            }
            
            newList.push(<Tile 
                key={i}
                id={i}
                imgSrc={imgSrc}
                type={tileType}
            />);
        }
        setTileList(newList)
    }

  return (
    <div className="mainContainer">
        <div className="boardContainer">
            { tileList.length > 0 &&
                tileList.map(t => t)
            }
        </div>
    </div>
  );
};

export default Game;