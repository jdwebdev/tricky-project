import React, { useEffect } from 'react';
import Tile from './Tile';
import { useState } from 'react';
import emptyTile from '../images/empty_tile.png';
import player from '../images/player.png';
import pharmacie from '../images/pharmacie.png';
import gel from '../images/gel.png';
import noMask from '../images/no_mask.png';
import mask from '../images/mask.png';
import virus from '../images/virus.png';

import { useSelector, useDispatch } from 'react-redux';
import { nextStage, movePlayer, giveMask } from '../actions/gameState';

const boardWidth = 9; 

const Game = () => {
    
    const dispatch = useDispatch();
    const currentStage = useSelector(state => state);
    const [tileList, setTileList] = useState([]);
    const [actionBtnLabel, setActionBtnLabel] = useState("Aucune action");
    const [actionId, setActionId] = useState(-1);

    useEffect(() => {
        createTileList(currentStage);
    }, [currentStage]);

    useEffect(() => {
        checkAdjacencyTiles();
    }, [tileList]);

    const createTileList = (currentStage) => {
        let newList = []
        let imgSrc = emptyTile;
        let tileType = "empty";
        for (let i = 0; i < boardWidth**2; i++) {
            if (i === currentStage.playerPos) {
                imgSrc = player;
                tileType = "player";
            } else if (i === currentStage.pharmacie) {
                imgSrc = pharmacie;
                tileType = "pharmacie";
            } else if (currentStage.noMask.includes(i)){ 
                imgSrc = noMask;
                tileType = "noMask";
            } else if (i === currentStage.gel) {
                imgSrc = gel;
                tileType = "gel";
            } else if (currentStage.mask.includes(i)) {
                imgSrc = mask;
                tileType = "mask";
            } else if (currentStage.virus.includes(i)) {
                imgSrc = virus;
                tileType = "virus";
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

    const move = (direction) => {

        // Check if the tileId is valid
        let directionTileId;
        const playerPosition = currentStage.playerPos;
        switch(direction) {
            case "up":
                directionTileId = playerPosition - boardWidth;
                if (playerPosition < boardWidth) return;
                break;
            case "down":
                directionTileId = playerPosition + boardWidth;
                if (playerPosition >= (boardWidth**2 - boardWidth)) return;
                break;
            case "right":
                directionTileId = playerPosition + 1;
                if((directionTileId % boardWidth === 0) && playerPosition === directionTileId - 1) return;
                break;
            case "left":
                directionTileId = playerPosition - 1;
                if(playerPosition === 0 || playerPosition % boardWidth === 0) return;
                break;
            default:
                return;
        }

        if (tileList[directionTileId].props.type === "empty") {
            dispatch(movePlayer(directionTileId));
        }
    }

    const checkAdjacencyTiles = () => {
        const playerPosition = currentStage.playerPos;
        const topTile = playerPosition - boardWidth;
        const bottomTile = playerPosition + boardWidth;
        const rightTile = playerPosition + 1;
        const leftTile = playerPosition -1;

        if (tileList?.[topTile]) {
            if (tileList[topTile].props.type !== "empty") {
                activeActionButton(tileList[topTile].props.type, topTile);
                return;
            }
        }
        if (tileList?.[bottomTile]) {
            if (tileList[bottomTile].props.type !== "empty") {
                activeActionButton(tileList[bottomTile].props.type, bottomTile);
                return;
            }
        }
        if (tileList?.[rightTile]) {
            if (tileList[rightTile].props.type !== "empty") {
                activeActionButton(tileList[rightTile].props.type, rightTile);
                return;
            }
        }
        if (tileList?.[leftTile]) {
            if (tileList[leftTile].props.type !== "empty") {
                activeActionButton(tileList[leftTile].props.type, leftTile);
                return;
            }
        }
        if (actionBtnLabel !== "Aucune action") {
            setActionBtnLabel("Aucune action", -1);
        }
    }

    const activeActionButton = (type, tileId) => {
        switch(type) {
            case "noMask":
                setActionBtnLabel("Donner un masque");
                setActionId(tileId);
                break;
            case "pharmacie":
                setActionBtnLabel("Entrer dans la pharmacie");
                setActionId(tileId);
                break;
            case "gel":
                setActionBtnLabel("Prendre du gel");
                setActionId(tileId);
                break;
            default: 
                setActionBtnLabel("Aucune action");
                setActionId(tileId);
        }
    }

    const doAction = (label) => {
        switch(label) {
            case "Donner un masque":
                dispatch(giveMask(actionId));
                setActionBtnLabel("Aucune action");
                setActionId(-1);
                break;
            case "Entrer dans la pharmacie":
                break;
            case "Prendre du gel":
                break;
            case "Aucune action":
                break;
            default: 
                return;
        }
    }

    return (
        <div className="mainContainer">
            <div className="boardContainer">
                { tileList.length > 0 &&
                    tileList.map(t => t)
                }
            </div>
            <div className="moveBtnContainer">
                <button onClick={() => move("up")}>▲</button>
                <button onClick={() => move("down")}>▼</button>
                <button onClick={() => move("left")}>◄</button>
                <button onClick={() => move("right")}>►</button>
            </div>
            <button onClick={() => dispatch(nextStage(currentStage.number+1))}>NEXT</button>
            <button onClick={() => doAction(actionBtnLabel)}>{actionBtnLabel}</button>
        </div>
    );
};

export default Game;