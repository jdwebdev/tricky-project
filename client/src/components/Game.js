import React, { useEffect, useRef } from 'react';
import Tile from './Tile';
import Score from './Score';
import Timer from './Timer'
import { useState } from 'react';
import PropTypes from 'prop-types';

// Import images
import emptyTile from '../images/empty_tile.png';
import player from '../images/player.png';
import pharmacie from '../images/pharmacie.png';
import gel from '../images/gel.png';
import noMask from '../images/no_mask.png';
import mask from '../images/mask.png';
import virus from '../images/virus.png';
import goal from '../images/goal.png'
import sick from '../images/sick.png'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { nextStage, movePlayer, giveMask, getGel, enterPharmacy, spreadVirus, emptyVirus, caughtVirus } from '../actions/gameState';
import { updateScore } from '../actions/statistiques';

const boardWidth = 9; 

const Game = (props) => {
    
    const dispatch = useDispatch();
    const game = useSelector(state => state);

    console.log("REFRESH");
    const [virusInterval, setVirusInterval] = useState();
    const [tileList, setTileList] = useState([]);
    const [actionBtnLabel, setActionBtnLabel] = useState("Aucune action");
    const [actionId, setActionId] = useState(-1);
    const [toNextStage, SetToNextStage] = useState(false);

    const savedSpreadVirusCallback = useRef();

    useEffect(() => {
        savedSpreadVirusCallback.current = spreadRandomVirus;
    })

    useEffect(() => {
        setVirusInterval(setInterval(() => {
            savedSpreadVirusCallback.current();
        }, 3000));
    }, [game.gameState.number])

    useEffect(() => {
        createTileList(game.gameState);
    }, [game.gameState]);

    useEffect(() => {
        checkAdjacencyTiles();
    }, [tileList]);

    const createTileList = (gameState) => {

        console.log("create tile list");
        console.log(gameState);

        let newList = []
        let imgSrc = emptyTile;
        let tileType = "empty";
        for (let i = 0; i < boardWidth**2; i++) {
            if (i === gameState.playerPos) {
                imgSrc = player;
                tileType = "player";
            } else if (i === gameState.pharmacie) {
                imgSrc = pharmacie;
                tileType = "pharmacie";
            } else if (gameState.noMask.includes(i)){ 
                imgSrc = noMask;
                tileType = "noMask";
            } else if (i === gameState.gel) {
                imgSrc = gel;
                tileType = "gel";
            } else if (gameState.mask.includes(i)) {
                imgSrc = mask;
                tileType = "mask";
            } else if (gameState.virus.includes(i)) {
                imgSrc = virus;
                tileType = "virus";
            } else if (i === gameState.goal) {
                imgSrc = goal;
                tileType = "goal";
            } else if (i === gameState.sick) {
                imgSrc = sick;
                tileType = "sick";
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
        const playerPosition = game.gameState.playerPos;
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
        const playerPosition = game.gameState.playerPos;
        const topTile = playerPosition - boardWidth;
        const bottomTile = playerPosition + boardWidth;
        const rightTile = playerPosition + 1;
        const leftTile = playerPosition -1;


        if (tileList?.[topTile]) {
            if (tileList[topTile].props.type !== "empty") {
                if (tileList[topTile].props.type === "virus") {
                    playerCaughtVirus();
                } else {
                    activeActionButton(tileList[topTile].props.type, topTile);
                }
                return;
            }
        }
        if (tileList?.[bottomTile]) {
            if (tileList[bottomTile].props.type !== "empty") {
                if (tileList[bottomTile].props.type === "virus") {
                    playerCaughtVirus();
                } else {
                    activeActionButton(tileList[bottomTile].props.type, bottomTile);
                }
                return;
            }
        }
        if (tileList?.[rightTile]) {
            if (tileList[rightTile].props.type !== "empty") {
                if (tileList[rightTile].props.type === "virus") {
                    playerCaughtVirus();
                } else {
                    activeActionButton(tileList[rightTile].props.type, rightTile);
                }
                return;
            }
        }
        if (tileList?.[leftTile]) {
            if (tileList[leftTile].props.type !== "empty") {
                if (tileList[leftTile].props.type === "virus") {
                    playerCaughtVirus();
                } else {
                    activeActionButton(tileList[leftTile].props.type, leftTile);
                }
                return;
            }
        }
        if (actionBtnLabel !== "Aucune action") {
            setActionBtnLabel("Aucune action", -1);
        }
    }

    const spreadRandomVirus = () => {
        if (game.gameState.noMask.length > 0) {

            if (game.gameState.virus.length > 0) {
                dispatch(emptyVirus());
            } else {

                let randomNum = Math.floor(Math.random() * game.gameState.noMask.length);
                
                const noMaskPosition = game.gameState.noMask[randomNum];
                const topTile = noMaskPosition - boardWidth;
                const bottomTile = noMaskPosition + boardWidth;
                const rightTile = noMaskPosition + 1;
                const leftTile = noMaskPosition -1;
    
                let list = [];
    
                list.push(topTile, bottomTile, rightTile, leftTile);
                if (list.includes(game.gameState.playerPos)) {
                    list.splice()
                    let index = list.indexOf(game.gameState.playerPos);
                    if (index !== -1) list.splice(index, 1);
                    playerCaughtVirus();
                }
                dispatch(spreadVirus(list));
            }
        } else {
            clearInterval(virusInterval);
        }
    }

    const playerCaughtVirus = () => {
        dispatch(updateScore(-100));
        dispatch(caughtVirus(game.gameState.playerPos));
        clearInterval(virusInterval);
        SetToNextStage(true);
        setTimeout(() => {
            alert("Vous avez attrapé le virus ! Score - 100 points !");
        }, 500)
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
        let tempScore=0;
        switch(label) {
            case "Donner un masque":
                dispatch(giveMask(actionId));
                setActionBtnLabel("Aucune action");
                setActionId(-1);
                dispatch(updateScore(50));
                break;
            case "Entrer dans la pharmacie":
                dispatch(enterPharmacy(actionId));
                setActionBtnLabel("Aucune action");
                setActionId(-1);
                SetToNextStage(true);
                tempScore = 100;
                if (game.gameState.gel > -1) {
                    tempScore -= 20;
                }
                if (game.gameState.noMask.length > 0) {
                    tempScore -= game.gameState.noMask.length*30;
                }
                dispatch(updateScore(tempScore));
                clearInterval(virusInterval);
                break;
            case "Prendre du gel":
                dispatch(getGel());
                dispatch(updateScore(20));
                break;
            case "Aucune action":
                break;
            default: 
                return;
        }
    }
    
    const handleNextBtn = () => {
        if (game.gameState.number >= 2) {
            props.finishGame("end");
        } else {
            dispatch(emptyVirus());
            dispatch(nextStage(game.gameState.number+1));
            SetToNextStage(false);
        }
    }

    return (
        <div className="mainContainer">
            <div className="boardContainer">
                { tileList.length > 0 &&
                    tileList.map(t => t)
                }
            </div>
            {
                !toNextStage &&
                <div>
                    <div className="moveBtnContainer">
                        <button onClick={() => move("up")}>▲</button>
                        <button onClick={() => move("down")}>▼</button>
                        <button onClick={() => move("left")}>◄</button>
                        <button onClick={() => move("right")}>►</button>
                    </div>
                    <button onClick={() => doAction(actionBtnLabel)}>{actionBtnLabel}</button>
                </div>
            }
            {
                toNextStage &&
                <button onClick={handleNextBtn}>Suivant</button>
            }
            <p>Dose : {game.gameState.number}</p>
            <Score 
                score={game.stats.score}
            />
            <Timer 
                stopTimer={toNextStage ? true : false}
            />
        </div>
    );
};

Game.propTypes = {
    finishGame: PropTypes.func.isRequired
}

export default Game;